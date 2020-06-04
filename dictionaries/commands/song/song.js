const Parser = require(`${process.cwd()}/classes/markov/Parser`);
const Builder = require(`${process.cwd()}/classes/markov/Builder`);

const parser = new Parser(__dirname, false, {
  // eslint-disable-next-line no-useless-escape
  delete: /[|*|\)|\(]+/g,
  words: /[#а-яА-ЯёЁa-zA-Z\-—]+/g,
});
const builder = new Builder(parser.getDict());

module.exports = (data) => {
  if (data.words[0] === 'инфо') return parser.getInfo();
  return builder.song(data.words[0]);
};
