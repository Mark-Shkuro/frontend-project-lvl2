#!/usr/bin/env nodecea
import { Command } from 'commander';
// import _ from 'lodash';
import genDiff from '../src/index.js';

const program = new Command();

program
  .version('0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));
// .parse(process.argv);

program.parse();
