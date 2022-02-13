import yaml from 'js-yaml';
import { readFile, getExt } from './utils.js';

export const parsers = {
  '.json': JSON.parse,
  '.yaml': yaml.load,
  '.yml': yaml.load,
};

export const parseFile = (filePath) => {
  const ext = getExt(filePath);
  const file = readFile(filePath);
  return parsers[ext](file);
};
