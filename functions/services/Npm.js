const axios = require('axios');

const { NPM_API_ROOT_URL } = process.env;

module.exports = {
  reg(regName) {
    return axios.get(`${NPM_API_ROOT_URL}?text=${regName}`);
  },
};
