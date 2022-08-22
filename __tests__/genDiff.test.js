import { expect, test } from '@jest/globals';
import fs from 'fs';
import genDiff from '../src/index.js';
import parser from '../src/parser.js';

const file1Json = parser('./file1.json');
const file2Json = parser('./file2.json');
const file1Yml = parser('./file1.yml');
const file2Yml = parser('./file2.yml');

const diffJson = fs.readFileSync('./__fixtures__/diffJson.html', 'utf-8');
console.log(genDiff(file1Json, file2Json));

test('genDiff', () => {
  expect(genDiff(file1Json, file2Json)).toEqual(diffJson);
});

test('genDiff', () => {
  expect(genDiff(file1Yml, file2Yml)).toEqual(diffJson);
});
