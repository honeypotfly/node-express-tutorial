// npm - global command, which comes with node
// npm --version

// local dependency - for local project
// npm i <package>

// global dep - use it in any project on your host
// npm install -g <package>

// package.json - manifest file (stores info about project/package)
// manual approach, create package.json in doc root
// npm init (step by step)
// npm init -y (all defaults)

const _ = require('lodash');
const items = [1, [2, [3, [4, 5]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);

console.log('Hello worldy');
