module.exports = {
  getRandom: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  getCommand: (str) => str.replace('!', '').toLowerCase().match(/^[А-Яа-яЁё]+/)[0],
  getArguments: (str) => str.match(/\(.+\)/)[0].replace(/\(|\)/g, '').split(','),
};
