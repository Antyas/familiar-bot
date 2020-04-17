module.exports = class {
  constructor(textList) {
    this.corpusList = textList.flatMap(this.getCorpus);
    this.dict = new Map();
    this.fill();
  }

  getCorpus(text) {
    return text
      .replace(/\.+|;|!|\?|\n/g, '#делитель')
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
    return `#старт ${str} #конец`.match(/[#а-яА-ЯёЁ—-]+/g);
  }

  getDict() {
    return this.dict;
  }
};
