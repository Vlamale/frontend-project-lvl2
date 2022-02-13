import path from 'path';
import fs from 'fs';

export const readFile = (filePath) => JSON.parse(fs.readFileSync(path.resolve(filePath)));
