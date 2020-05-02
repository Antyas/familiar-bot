const Parser = require(`${process.cwd()}/classes/markov/Parser`);
const Builder = require(`${process.cwd()}/classes/markov/Builder`);

const parser = new Parser(__dirname);
const builder = new Builder(parser.getDict());

module.exports = (data) => builder.song(data.words[0]);
