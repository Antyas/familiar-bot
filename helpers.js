module.exports = {
  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  getUsers(str) {
    return str.match(/<@.+>/g).map((item) => item.replace(/<|>|@|!/g, ''));
  },
};
