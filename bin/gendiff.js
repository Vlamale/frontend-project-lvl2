#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../index';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>', 'first file')
  .argument('<filepath2>', 'second file')
  .option('-f, --format <type>', 'output format')
  .action(gendiff);

program.parse();
