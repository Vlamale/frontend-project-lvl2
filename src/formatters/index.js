import plain from './plain.js';
import stylish from './stylish.js';

const formatter = {
  stylish: (diff) => stylish(diff),
  plain: (diff) => plain(diff),
};

export default (diff, formatType) => formatter[formatType](diff);
