import { parseFile } from './src/parsers.js';
import calcDiff from './src/diff.js';
import formatDiff from './src/formatters/index.js';

export default function (filePath1, filePath2, formatType = 'stylish') {
  const firstFileData = parseFile(filePath1);
  const secondFileData = parseFile(filePath2);
  const diff = calcDiff(firstFileData, secondFileData);
  
  return formatDiff(diff, formatType);
}
