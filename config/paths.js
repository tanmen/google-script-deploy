const fs = require('fs-extra');
const paths = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolve = relativePath => paths.resolve(appDirectory, relativePath);

module.exports = {
  build: resolve('dist')
};
