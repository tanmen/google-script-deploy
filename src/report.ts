import {context, getOctokit} from "@actions/github";
import {githubToken} from "./config";

const external_id = 'google-script-action';
const sha = context.payload.pull_request?.head.sha ?? context.sha;
const octokit = getOctokit(githubToken);
const url = (id: string) => `https://script.google.com/macros/s/${id}/exec`;


export const report = async (id: string) => {
  const text = `URL: ${url(id)}`;

  const name = 'Google Script';
  const {data: {check_runs}} = await octokit.checks.listForRef({
    ...context.repo,
    ref: context.ref,
    check_name: name
  });

  const summary = 'Deploy Successful';
  if (check_runs.length && check_runs[0].external_id === external_id) {
    const checkRun = check_runs[0];
    return octokit
      .checks
      .update({
        ...context.repo,
        check_run_id: checkRun.id,
        output: {
          ...checkRun.output,
          summary,
          text: [checkRun.output.text, text].join('\n\n')
        }
      })
  }

  return octokit
    .checks
    .create({
      ...context.repo,
      head_sha: sha,
      name,
      conclusion: 'success',
      external_id,
      output: {
        title: 'Google Script Result',
        summary: summary,
        text,
      }
    });
};
