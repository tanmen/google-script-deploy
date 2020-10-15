import {exec} from 'child_process';
import {promises} from "fs";
import {homedir} from "os";
import {join} from "path";
import {clientId, clientSecret, refreshToken} from "../config";

const {writeFile} = promises;
export const initialize = () =>
  Promise.all([
    exec('npm install -g @google/clasp'),
    writeFile(join(homedir(), '.clasprc.json'),
      JSON.stringify(clasprc(refreshToken, clientId, clientSecret)))
  ])

const clasprc = (refreshToken: string, clientId: string, clientSecret: string) => ({
  token: {
    access_token: "",
    scope: "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/script.deployments https://www.googleapis.com/auth/service.management https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/script.webapp.deploy https://www.googleapis.com/auth/script.projects https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/logging.read https://www.googleapis.com/auth/userinfo.email",
    token_type: "Bearer",
    expiry_date: 0,
    id_token: "",
    refresh_token: refreshToken
  },
  oauth2ClientSettings: {
    clientId,
    clientSecret,
    redirectUri: "http://localhost"
  },
  isLocalCreds: false
})
