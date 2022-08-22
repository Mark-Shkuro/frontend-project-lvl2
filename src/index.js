import _ from 'lodash';
import parser from './parser.js';

const copyKeys = (file1, file2) => _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));

const diffLogic = (file1, file2, keys) => {
  const result = keys.reduce((acc, key) => {
    if (_.has(file1, key) && _.has(file2, key) && file1[key] === file2[key]) acc.push(`  ${key} : ${file1[key]}`);
    else if (!_.has(file2, key)) acc.push(`- ${key} : ${file1[key]}`);
    else if (_.has(file1, key) && _.has(file2, key) && file1[key] !== file2[key]) {
      acc.push(`- ${key} : ${file1[key]}`);
      acc.push(`+ ${key} : ${file2[key]}`);
    } else acc.push(`+ ${key} : ${file2[key]}`);
    return acc;
  }, []);
  return result.join('\n');
};

const checkDiff = (file1, file2) => {
  const file1Cp = _.clone(file1);
  const file2Cp = _.clone(file2);
  const sortedUnionKeys = copyKeys(file1Cp, file2Cp);
  const result = diffLogic(file1Cp, file2Cp, sortedUnionKeys);
  return result;
};

const genDiff = (path1, path2) => checkDiff(parser(path1), parser(path2));

export default genDiff;
