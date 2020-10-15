import {exec} from "../exec";

export const push = () =>
  exec("clasp push")
    .then(log => console.log(log));
