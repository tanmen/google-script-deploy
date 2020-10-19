import {deployConfig} from "../config";
import {exec} from "../exec";

const opts = {
  V: deployConfig.versionNumber,
  d: deployConfig.description,
  i: deployConfig.deploymentId
}

/**
 * Deploy to Google Drive
 * @returns {Promise<string>} deployment id
 */
export const deploy = (): Promise<string> =>
  exec("clasp deploy", opts)
    .then(log => log.match(/(?<=-\s)\S+(?=\s@\d+.)/g)?.[0]);

