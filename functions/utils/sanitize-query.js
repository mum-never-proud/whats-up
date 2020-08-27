function sanitizeQuery(queryString = '') {
  if (typeof queryString !== 'string') {
    return [];
  }

  const [query, ...keyword] = queryString.split(' ');

  if (!query || !keyword) {
    return [];
  }

  return [query.trim().toLowerCase(), keyword.join(' ').trim().toLowerCase()];
}

module.exports = sanitizeQuery;
