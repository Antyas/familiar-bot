const { parser, builder } = require('./dict');

module.exports = (data) => {
  if (data.words[0] === 'инфо') return parser.getInfo();
  return builder.song(data.words[0]);
};
