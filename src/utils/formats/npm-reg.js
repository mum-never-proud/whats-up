const stripIndent = require('strip-indent');

function gitRepo(data) {
  return data.objects
    .slice(0, 3)
    .map((item) => {
      const {
        package: {
          name,
          description,
          version,
          links: { npm },
          publisher: { username },
        },
        score: { detail: { quality } },
      } = item;

      return stripIndent(`
      *${name}* (${'⭐'.repeat(Math.round(quality * 5))})

      with 💖 by *${username}*

      🔖  ${version}

      🎤  ${description || 'N/A'}

      📦  ${npm}
    `);
    })
    .join('\n---\n');
}

module.exports = gitRepo;
