const Parser = require(`${process.cwd()}/classes/markov/Parser`);
const Builder = require(`${process.cwd()}/classes/markov/Builder`);

const parser = new Parser(__dirname, false, {
  delete: /[0-9|*]+/g,
  words: /[#а-яА-ЯёЁa-zA-Z\-—]+/g,
});
const builder = new Builder(parser.getDict());

module.exports = (data) => builder.song(data.words[0]);
