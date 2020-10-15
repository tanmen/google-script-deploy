import {setFailed} from "@actions/core";
import {deploy, initialize, push} from "./actions";

initialize()
  .then(() => push())
  .then(() => deploy())
  .catch(e => setFailed(e));
