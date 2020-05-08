const Parser = require(`${process.cwd()}/classes/markov/Parser`);
const Builder = require(`${process.cwd()}/classes/markov/Builder`);

const parser = new Parser(__dirname, false, {
  separator: /@|\n/g,
  filter: ['∗ ∗ ∗', ''],
});
const builder = new Builder(parser.getDict());

module.exports = (data) => builder.samosbor(data.words[0]);
