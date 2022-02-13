import path from 'path';
import fs from 'fs';

export const getExt = (filePath) => path.extname(path.resolve(filePath));

export const readFile = (filePath) => fs.readFileSync(path.resolve(filePath));
