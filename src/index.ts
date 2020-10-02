import {exec} from "./exec";
import {initialize} from "./initialize";

initialize()
  .then(() => exec('clasp push'))
  .then(() => exec('clasp deploy'));
