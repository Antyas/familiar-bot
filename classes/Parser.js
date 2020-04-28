const fs = require('fs');
const { join } = require('path');

module.exports = class {
  constructor(dir) {
    this.corpusList = this.read(dir).flatMap(this.getCorpus);
    this.dict = new Map();
    this.fill();
  }

  read(dir) {
    return fs
      .readdirSync(dir, 'utf8')
      .filter((file) => file.includes('.txt'))
      .map((file) => fs.readFileSync(join(dir, file), 'utf8'));
  }

  getCorpus(text) {
    return text
      .replace(/\.+|;|!|\?|\n/g, '#делитель')
      .replace(/\[.+\]/g, ' ')
      .split(/#делитель/g)
      .map((t) => t.trim())
      .filter((t) => t && t !== '.');
  }

  fill() {
    this.corpusList.forEach((corpus) => {
      let last = '';

      this.parse(corpus).forEach((key) => {
        if (last && this.dict.has(last)) {
          const link = this.dict.get(last);
          const number = link.list.has(key) ? link.list.get(key) + 1 : 1;

          link.list.set(key, number);
          link.max += 1;
          this.dict.set(last, link);
        } else if (last) {
          const link = {
            max: 1,
            list: new Map([[key, 1]]),
          };
          this.dict.set(last, link);
        }

        last = key;
      });
    });
  }

  parse(str) {
    return `#старт ${str} #конец`.match(/[#а-яА-ЯёЁ—\-0-9]+/g);
  }

  getDict() {
    return this.dict;
  }
};
