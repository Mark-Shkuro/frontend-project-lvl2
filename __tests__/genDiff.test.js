import { expect, test } from '@jest/globals';
import fs from 'fs';
import genDiff from '../src/index.js';

const file1Json = './file1.json';
const file2Json = './file2.json';
const file1Yml = './file1.yml';
const file2Yml = './file2.yml';

const diffJson = fs.readFileSync('./__fixtures__/diffJson.html', 'utf-8');

test('genDiff', () => {
  expect(genDiff(file1Json, file2Json)).toEqual(diffJson);
});

test('genDiff', () => {
  expect(genDiff(file1Yml, file2Yml)).toEqual(diffJson);
});
