import _ from 'lodash';

const addQuotesIfString = (value) => (typeof value === 'string' ? `'${value}'` : value);

const formatValue = (value) => (_.isObject(value) ? '[complex value]' : `${addQuotesIfString(value)}`);

const getLine = {
  deleted: (path) => `Property '${path}' was removed`,
  added: (path, value) => `Property '${path}' was added with value: ${formatValue(value)}`,
  updated: (path, value) => `Property '${path}' was updated. From ${formatValue(value.before)} to ${formatValue(value.after)}`,
  unchanged: () => [],
};

const plain = (diff, path = []) => {
  const lines = diff.flatMap(({ node, value, diffTree, status }) => {
    const currentPath = [...path, node].join('.');
    if (diffTree) {
      return plain(diffTree, [...path, node]);
    }
    return getLine[status](currentPath, value);
  }).join('\n');
  return lines;
};

export default plain;
