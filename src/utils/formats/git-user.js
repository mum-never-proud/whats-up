const stripIndent = require('strip-indent');

function gitUser(data) {
  return stripIndent(`
    *${data.login}*

    🏢  ${data.company || 'N/A'}

    📍  ${data.location || 'N/A'}

    🎗️  ${data.bio || 'N/A'}

    🏃‍  ${data.following}

    🕺  ${data.followers}

    💁  ${data.html_url}
  `);
}

module.exports = gitUser;
