const axios = require('axios');

const { SPOTIFY_API_ROOT_URL, SPOTIFY_AUTH_TOKEN } = process.env;

module.exports = {
  preview(trackQuery) {
    return axios.get(`${SPOTIFY_API_ROOT_URL}?q=${trackQuery}&type=track&limit=1`, {
      headers: {
        Authorization: `Bearer ${SPOTIFY_AUTH_TOKEN}`,
      },
    });
  },
};
