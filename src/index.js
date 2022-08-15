const _ = require('lodash');
const file1 = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
  };
const file2 = {
    "timeout": 20,
    "verbose": true,
    "host": "hexlet.io"
    };

const genDiff = (file1, file2) => {
  const file1Cp = _.clone(file1);
  const file2Cp = _.clone(file2);
  const key1 = Object.keys(file1Cp);
  const key2 = Object.keys(file2Cp);
  const sortedUnionKeys = _.sortBy(_.union(key1, key2));
  const result = sortedUnionKeys.reduce((acc, key) => {
    if(_.has(file1Cp, key) && _.has(file2Cp, key) && file1[key] === file2[key]) acc.push(`  ${key} : ${file1Cp[key]}`);
    else if(!_.has(file2Cp, key)) acc.push(`- ${key} : ${file1Cp[key]}`);
    else if(_.has(file1Cp, key) && _.has(file2Cp, key) && file1[key] !== file2[key]) {
      acc.push(`- ${key} : ${file1Cp[key]}`);
      acc.push(`+ ${key} : ${file2Cp[key]}`);
    }
    else acc.push(`+ ${key} : ${file2Cp[key]}`)
    return acc;
  },[]);
  return result.join(`\n`);
};

console.log(genDiff(file1, file2));