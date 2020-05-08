const fs = require('fs');
const { join } = require('path');

module.exports = class {
  constructor(dir, saveLog = false, r = {}) {
    this.saveLog = saveLog;
    this.dir = dir;
    this.r = {
      separator: r.separator || /\.+|;|!|\?|\n/g,
      delete: r.delete || /^[#а-яА-ЯёЁa-zA-Z—\-0-9]+/g,
      words: r.words || /[#а-яА-ЯёЁa-zA-Z—\-0-9]+/g,
      filter: r.filter || ['.', ''],
    };

    this.setCorpusList();
    this.dict = new Map();
    this.fill();
  }

  read(dir) {
    return fs
      .readdirSync(dir, 'utf8')
      .filter((file) => file.includes('.txt'))
      .map((file) => ({
        name: file,
        text: fs.readFileSync(join(dir, file), 'utf8'),
      }));
  }

  setCorpusList() {
    this.corpusList = this.read(this.dir).flatMap((data) => {
      const list = data.text
        .replace(this.r.separator, '#sep')
        .replace(this.r.delete, ' ')
        .split(/#sep/g)
        .map((t) => t.trim())
        .filter((t) => !this.r.filter.includes(t));

      if (this.saveLog) this.writeLog(data.name, list);
      return list;
    });
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
    return `#start ${str} #end`.match(this.r.words);
  }

  writeLog(fileName, list) {
    const path = join(process.cwd(), 'logs', fileName.replace(/\..+/, '.json'));
    const log = JSON.stringify(list, null, 2);
    fs.writeFileSync(path, log);
  }

  getDict() {
    return this.dict;
  }
};
