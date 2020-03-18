const errors = require('../dictionaries/errors');

module.exports = class {
  getErrorText() {
    return errors[this.getRandom(0, errors.length - 1)];
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
