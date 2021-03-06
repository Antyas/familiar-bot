const { getRandom } = require('../../helpers');

module.exports = class {
  constructor(dict) {
    this.dict = dict;
  }

  build(cur = '#start') {
    let res = `${cur} `;
    do {
      cur = this.getItem(cur);
      res += `${cur} `;
    } while (cur !== '#end');
    return res.replace(/#end|#start/g, '');
  }

  song(number) {
    const n = number || getRandom(1, 15);
    let song = '';
    for (let i = 0; i < n && i < 20; i += 1) {
      song += `${this.build().toLowerCase()}\n`;
    }
    return song;
  }

  samosbor(number) {
    const n = number || getRandom(1, 15);
    const list = [];
    for (let i = 0; i < n && i < 15; i += 1) {
      list.push(this.build().toUpperCase());
    }
    return list.join('\n@\n');
  }

  sentence(word = '#start') {
    if (!this.dict.has(word)) return '';
    return this.build(word).toLowerCase();
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
