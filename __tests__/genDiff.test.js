// import { strict as assert } from 'assert';
import { expect, test } from '@jest/globals';
import fs from 'fs';
import genDiff from '../src/index.js';

const file1Json = './__fixtures__/file1.json';
const file2Json = './__fixtures__/file2.json';
const diffJson = fs.readFileSync('./__fixtures__/diffJson.html', 'utf-8');

test('genDiff', () => {
  expect(genDiff(file1Json, file2Json)).toEqual(diffJson);
});
