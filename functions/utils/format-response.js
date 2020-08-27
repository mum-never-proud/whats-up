const formatMap = require('../constants/format-map');

function formatResponse(type, data) {
  if (typeof type !== 'string' || !data) {
    return '🙅 Sorry there are no result\'s for this search';
  }

  const message = formatMap[type](data);

  if (!message) {
    return '🙅 Sorry there are no result\'s for this search';
  }

  return message;
}

module.exports = formatResponse;
