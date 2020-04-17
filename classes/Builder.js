const { getRandom } = require('../helpers');

module.exports = class {
  constructor(dict) {
    this.dict = dict;
  }

  build() {
    let cur = '#старт';
    let res = '';
    do {
      cur = this.getItem(cur);
      res += ` ${cur}`;
    } while (cur !== '#конец');

    return res.replace(/ #конец/g, '.');
  }

  getItem(prev) {
    const link = this.dict.get(prev);
    const roll = getRandom(1, link.max);

    let i = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, n] of link.list) {
      i += n;
      if (i >= roll) return key;
    }
  }
};