/* eslint-disable camelcase */
const axios = require('axios');

const { SPOTIFY_API_ROOT_URL, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

const fetchToken = () => axios({
  url: 'https://accounts.spotify.com/api/token',
  method: 'POST',
  params: { grant_type: 'client_credentials' },
  auth: {
    username: SPOTIFY_CLIENT_ID,
    password: SPOTIFY_CLIENT_SECRET,
  },
});

const fetchTrack = (token) => (trackQuery) => axios.get(`${SPOTIFY_API_ROOT_URL}?q=${trackQuery}&type=track&limit=1`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

module.exports = {
  preview(trackQuery) {
    return new Promise((resolve, reject) => {
      fetchToken()
        .then(({ data: { access_token } }) => fetchTrack(access_token)(trackQuery))
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  },
};
