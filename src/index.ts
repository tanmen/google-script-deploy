import {deploy, initialize, push} from "./actions";

initialize()
  .then(() => push())
  .then(() => deploy());
