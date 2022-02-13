import { readFile } from './src/utils';

export default function (filePath1, filePath2) {
  const firstFileData = readFile(filePath1);
  const secondFileData = readFile(filePath2);
  const result = Object.keys({ ...firstFileData, ...secondFileData })
    .sort()
    .reduce((acc, node) => {
      const firstFileHasNode = Object.hasOwnProperty.call(firstFileData, node);
      const secondFileHasNode = Object.hasOwnProperty.call(secondFileData, node);
      if (firstFileHasNode && !secondFileHasNode) {
        return [...acc, `  - ${node}: ${JSON.stringify(firstFileData[node])}`];
      }
      if (!firstFileHasNode && secondFileHasNode) {
        return [...acc, `  + ${node}: ${JSON.stringify(secondFileData[node])}`];
      }
      return firstFileData[node] === secondFileData[node]
        ? [...acc, `    ${node}: ${firstFileData[node]}`]
        : [...acc, `  - ${node}: ${firstFileData[node]}`, `  + ${node}: ${secondFileData[node]}`];
    }, []).join('\n');
  console.log(`{\n${result}\n}`);
  return `{\n${result}\n}`;
}
