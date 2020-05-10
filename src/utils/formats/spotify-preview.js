const Twilio = require('twilio');
const stripIndent = require('strip-indent');

function spotifyPreview(data) {
  const [track] = data.tracks.items;
  const message = stripIndent(`
    *${track.name}*
  `);
  const twiml = new Twilio.twiml.MessagingResponse().message(message);

  twiml.media(track.preview_url);

  return twiml;
}

module.exports = spotifyPreview;
