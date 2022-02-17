import _ from 'lodash';
import { getIndent, lineInBrackets } from '../utils.js';

const formatValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const { currentIndent, bracketIndent } = getIndent(depth);
  const lines = Object
    .entries(value)
    .map(([node, children]) => `${currentIndent}  ${node}: ${formatValue(children, depth + 2)}`);

  return lineInBrackets(lines, bracketIndent);
};

const getLine = {
  deleted: (node, value, depth, indent) => `${indent}- ${node}: ${formatValue(value, depth)}`,
  added: (node, value, depth, indent) => `${indent}+ ${node}: ${formatValue(value, depth)}`,
  unchanged: (node, value, depth, indent) => `${indent}  ${node}: ${formatValue(value, depth)}`,
  updated: (node, value, depth, indent) => [
    `${indent}- ${node}: ${formatValue(value.before, depth)}`,
    `${indent}+ ${node}: ${formatValue(value.after, depth)}`,
  ],
};

const stylish = (diff, depth = 1) => {
  const { currentIndent, bracketIndent } = getIndent(depth);
  const lines = diff.flatMap(({
    node, value, diffTree, status,
  }) => {
    if (diffTree) {
      return getLine[status](node, stylish(diffTree, depth + 2), depth + 2, currentIndent);
    }
    return getLine[status](node, value, depth + 2, currentIndent);
  });
  return lineInBrackets(lines, bracketIndent);
};

export default stylish;
