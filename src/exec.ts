import {exec as processExec} from "child_process";
import {command} from './command';

export const exec = (cmd: string, opts?: { [key: string]: string }) =>
  new Promise((resolve, reject) => processExec(command(cmd, opts),
    (error, stdout, stderr) =>
      error ? reject(stderr) : resolve(stdout)));
