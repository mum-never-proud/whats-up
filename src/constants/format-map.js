const gitRepo = require('../utils/formats/git-repo');
const gitUser = require('../utils/formats/git-user');
const npmReg = require('../utils/formats/npm-reg');

module.exports = {
  'git-user': gitUser,
  'git-repo': gitRepo,
  'npm-reg': npmReg,
};
