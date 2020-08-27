const gitRepo = require('../utils/formats/git-repo');
const gitUser = require('../utils/formats/git-user');
const npmReg = require('../utils/formats/npm-reg');
const spotifyPreview = require('../utils/formats/spotify-preview');

module.exports = {
  'git-user': gitUser,
  'git-repo': gitRepo,
  'npm-reg': npmReg,
  'spotify-preview': spotifyPreview,
};
