import fs from 'fs';
import path, { dirname } from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const detectExten = (file) => {
  const filePathDetect = getFixturePath(file);
  const result = path.extname(filePathDetect) === '.yml' || path.extname(filePathDetect) === '.yaml' ? 'yml' : 'json';
  return result;
};

const parser = (file) => {
  const extension = detectExten(file);
  const filePathParser = getFixturePath(file);
  if (extension === 'yml') return yaml.load(fs.readFileSync(filePathParser));
  return JSON.parse(fs.readFileSync(filePathParser));
};

export default parser;
