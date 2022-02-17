import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const formatter = {
  stylish: (diff) => stylish(diff),
  plain: (diff) => plain(diff),
  json: (diff) => json(diff),
};

export default (diff, formatType) => formatter[formatType](diff);
