const formatMap = require('../constants/format-map');

function formatResponse(type, data) {
  if (typeof type !== 'string' || !data) {
    return '🙅 Sorry there are no result\'s for this search';
  }

  const results = formatMap[type](data);

  return results.length ? results : '🙅 Sorry there are no result\'s for this search';
}

module.exports = formatResponse;
