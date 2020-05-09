const axios = require('axios');

const { GIT_API_ROOT_URL } = process.env;

module.exports = {
  user(userName) {
    return axios.get(`${GIT_API_ROOT_URL}/users/${userName}`);
  },
  repo(repoName) {
    return axios.get(`${GIT_API_ROOT_URL}/search/repositories?q=${repoName}`);
  },
};
