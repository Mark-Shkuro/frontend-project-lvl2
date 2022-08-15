#!/usr/bin/env nodecea
const { Command } = require("commander");
const _ = require('lodash');

const program = new Command();

program
    .version('0.1')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .parse(process.argv);
    
 
console.log('Compares two configuration files and shows a difference.');