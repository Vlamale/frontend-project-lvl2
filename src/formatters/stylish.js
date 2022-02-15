import _ from 'lodash';
import { getIndent, lineInBrackets } from '../utils.js';

const getLine = {
  deleted: (key, value) => `- ${key}: ${value}`,
  added: (key, value) => `+ ${key}: ${value}`,
  unchanged: (key, value) => `  ${key}: ${value}`,
};

const formatObject = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const { currentIndent, bracketIndent } = getIndent(depth);
  const lines = Object
    .entries(value)
    .map(([node, children]) => `${currentIndent}${getLine.unchanged(node, formatObject(children, depth + 2))}`);

  return lineInBrackets(lines, bracketIndent);
};

export default (diff) => {
  const iter = (currentValue, depth) => {
    const { currentIndent, bracketIndent } = getIndent(depth);

    const lines = currentValue.map(({ node, value, children, status }) => {
      if (children) {
        return `${currentIndent}${getLine[status](node, iter(children, depth + 2))}`;
      }
      if (_.isObject(value)) {
        return `${currentIndent}${getLine[status](node, formatObject(value, depth + 2))}`;
      }
      return `${currentIndent}${getLine[status](node, value)}`;
    });

    return lineInBrackets(lines, bracketIndent);
  };
  return iter(diff, 1);
};
