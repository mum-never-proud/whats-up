const chalk = require('chalk');
const isQuery = require('../utils/is-query');
const sanitizeQuery = require('../utils/sanitize-query');
const queryMap = require('../constants/query-map');
const formatResponse = require('../utils/format-response');

function processQuery(queryString = '') {
  return new Promise((resolve, reject) => {
    const [query, keyword] = sanitizeQuery(queryString);

    if (isQuery(query)) {
      console.log(chalk`{bold.green query >> ${query}, ${keyword}}`);

      const [service, method] = query.split('-');

      queryMap[service][method](keyword)
        .then((res) => resolve(formatResponse(query, res.data)))
        .catch((e) => {
          console.log(chalk`{bold.red ${e}}`);

          resolve('🙅 Sorry there are no result\'s for this search');
        });
    } else {
      reject(Error(`invalid query >> ${queryString}`));
    }
  });
}

module.exports = processQuery;
