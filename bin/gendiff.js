#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>', 'first file')
  .argument('<filepath2>', 'second file')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((pathFile1, pathFile2) => {
    console.log(gendiff(pathFile1, pathFile2, program.opts().format));
  });

program.parse();
