import stylish from './stylish.js';

const formatter = {
  stylish: (diffList) => stylish(diffList),
};

export default (diff, formatType) => formatter[formatType](diff);
