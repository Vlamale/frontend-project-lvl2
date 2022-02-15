import path from 'path';
import fs from 'fs';

export const getExt = (filePath) => path.extname(path.resolve(filePath));

export const readFile = (filePath) => fs.readFileSync(path.resolve(filePath));

export const getUniqueSortedKeysFrom = (obj1, obj2) => Object.keys({ ...obj1, ...obj2 }).sort();

export const lineInBrackets = (lines, bracketIndent) => ['{', ...lines, `${bracketIndent}}`].join('\n');

export const getIndent = (depth) => {
  const spacesCount = 2;
  const indentSize = depth * spacesCount;
  const currentIndent = ' '.repeat(indentSize);
  const bracketIndent = ' '.repeat(indentSize - spacesCount);
  return { currentIndent, bracketIndent };
};
