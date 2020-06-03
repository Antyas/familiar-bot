module.exports = class {
  constructor(list) {
    this.list = list;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  reply(data) {
    const func = this.list[this.getRandom(0, this.list.length - 1)];
    return func(data);
  }
};
