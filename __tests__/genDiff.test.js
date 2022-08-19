// import { strict as assert } from 'assert';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';
import fs from 'fs';

const file1Json = './__fixtures__/file1.json';
const file2Json = './__fixtures__/file2.json';
const diffJson = fs.readFileSync('./__fixtures__/diffJson.html', 'utf-8');

test('genDiff', () => {
  expect(genDiff(file1Json, file2Json)).toEqual(diffJson);
});

console.log(diffJson);
// console.log(genDiff(file1Json, file2Json) === fs.readFileSync('./__fixtures__/diffJson.html', 'utf-8'));

