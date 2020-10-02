import {getInput} from "@actions/core";

export const githubToken = getInput('github-token');
export const refreshToken = getInput('refresh-token');
export const clientId = getInput('client-id');
export const clientSecret = getInput('client-secret');
export const isDeploy = Boolean(getInput('deploy'));
export const deployConfig = {
  versionNumber: Number(getInput('deploy-version-number')),
  description: getInput('deploy-description'),
  deploymentId: getInput('deploy-id')
}
