import _ from 'lodash';
import fs from 'fs';
import path from 'path';

const prepareFile = (file) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), file)));

const diffLogic = (file1, file2) => {
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

const genDiff = (path1, path2) => {
  return diffLogic(prepareFile(path1), prepareFile(path2));
};

export default genDiff;