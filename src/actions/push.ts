import {exec} from "../exec";

export const deploy = () =>
  exec("clasp deploy")
    .then(log => console.log(log));
