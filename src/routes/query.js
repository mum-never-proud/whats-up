const Twilio = require('twilio');
const chalk = require('chalk');
const router = require('express').Router();
const validateRequest = require('../middlewares/validate-request');
const query = require('../services/Query');

router.post('/', validateRequest, (req, res) => {
  const twiml = new Twilio.twiml.MessagingResponse();

  res.set('Content-Type', 'text/xml');

  query(req.body.Body)
    .then((message) => {
      if (typeof message === 'string') {
        res.send(twiml.message(message).toString()).status(200);
      } else {
        res.send(message.toString()).status(200);
      }
    })
    .catch((e) => {
      console.log(chalk`{bold.red ${e}}`);

      res.send(twiml.message('🙅 Whoooops didn\'t get that').toString());
    });
});

module.exports = router;
