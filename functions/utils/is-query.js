const queries = require('../constants/queries');

function isQuery(query) {
  return queries.includes(query);
}

module.exports = isQuery;
