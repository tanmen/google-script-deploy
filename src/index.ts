import {setFailed} from "@actions/core";
import {deploy, initialize} from "./actions";
import {report} from "./report";

initialize()
  .then(() => deploy())
  .then(id => report(id))
  .catch(e => setFailed(e));
