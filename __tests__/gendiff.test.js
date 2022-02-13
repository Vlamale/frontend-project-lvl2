import fs from 'fs';
import path from 'path';
import gendiff from '../index';

const result = fs.readFileSync(path.resolve(__dirname, './__fixtures__/flatComparison/result.txt'), { encoding: 'utf8' });
const path1 = path.resolve(__dirname, './__fixtures__/flatComparison/filepath1.json');
const path2 = path.resolve(__dirname, './__fixtures__/flatComparison/filepath2.json');

test('flat json file comparison function', () => {
  expect(gendiff(path1, path2)).toBe(result);
});
