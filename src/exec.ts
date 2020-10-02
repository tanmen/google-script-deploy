import {exec as processExec} from "child_process";

export const exec = (cmd: string) =>
  new Promise((resolve, reject) => processExec(cmd, (error, stdout, stderr) =>
    error ? reject(stderr) : resolve(stdout)));
