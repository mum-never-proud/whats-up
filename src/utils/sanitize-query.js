function sanitizeQuery(queryString = '') {
  if (typeof queryString !== 'string') {
    return [];
  }

  const [query, keyword] = queryString.split(' ');

  if (!query || !keyword) {
    return [];
  }

  return [query.substring(1).trim().toLowerCase(), keyword.trim().toLowerCase()];
}

module.exports = sanitizeQuery;
