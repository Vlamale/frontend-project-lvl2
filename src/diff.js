import _ from 'lodash';
import { getUniqueSortedKeysFrom } from './utils.js';

const calcDiff = (tree1, tree2) => {
  const uniqueNodes = getUniqueSortedKeysFrom(tree1, tree2);

  return uniqueNodes.reduce((acc, node) => {
    const value1 = tree1[node];
    const value2 = tree2[node];

    if (!_.has(tree1, node)) {
      return [...acc, { node, value: value2, status: 'added' }];
    }

    if (!_.has(tree2, node)) {
      return [...acc, { node, value: value1, status: 'deleted' }];
    }

    if (_.isObject(value1) && _.isObject(value2)) {
      return [...acc, { node, children: calcDiff(value1, value2), status: 'unchanged' }];
    }

    if (value1 !== value2) {
      return [...acc,
        { node, value: value1, status: 'deleted' },
        { node, value: value2, status: 'added' },
      ];
    }
    return [...acc, { node, value: value1, status: 'unchanged' }];
  }, []);
};

export default calcDiff;
