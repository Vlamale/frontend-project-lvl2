import fs from 'fs';
import path from 'path';
import gendiff from '../index';

const jsonRresult = fs.readFileSync(path.resolve(__dirname, './__fixtures__/jsonComparison/result.txt'), { encoding: 'utf8' });
const jsonFileData1 = path.resolve(__dirname, './__fixtures__/jsonComparison/file1.json');
const jsonFileData2 = path.resolve(__dirname, './__fixtures__/jsonComparison/file2.json');

const yamlResult = fs.readFileSync(path.resolve(__dirname, './__fixtures__/yamlComparison/result.txt'), { encoding: 'utf8' });
const yamlFileData1 = path.resolve(__dirname, './__fixtures__/yamlComparison/file1.yaml');
const yamlFileData2 = path.resolve(__dirname, './__fixtures__/yamlComparison/file2.yaml');

test('flat json file comparison function', () => {
  expect(gendiff(jsonFileData1, jsonFileData2)).toBe(jsonRresult);
});

test('flat yaml file comparison function', () => {
  expect(gendiff(yamlFileData1, yamlFileData2)).toBe(yamlResult);
});
