#!/usr/bin/env node
const { program } = require('commander');
const gendiff = require('../index.js')

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .argument('<filepath1>', 'first file')
    .argument('<filepath2>', 'second file')
    .option('-f, --format <type>', 'output format')
    .action(gendiff);

program.parse();