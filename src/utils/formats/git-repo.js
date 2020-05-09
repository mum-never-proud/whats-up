const stripIndent = require('strip-indent');

function gitRepo(data) {
  return data.items
    .slice(0, 3)
    .map((item) => stripIndent(`
      *${item.full_name}* (${item.stargazers_count} ⭐)

      🎤  ${item.description || 'N/A'}

      👁️‍🗨️  ${item.watchers_count}

      🍴  ${item.forks_count}

      📦  ${item.html_url}
    `))
    .join('\n---\n');
}

module.exports = gitRepo;
