const Twilio = require('twilio');
const chalk = require('chalk');
const router = require('express').Router();
const validateRequest = require('../middlewares/validate-request');
const query = require('../services/Query');

router.post('/', validateRequest, (req, res) => {
  const twiml = new Twilio.twiml.MessagingResponse();

  query(req.body.Body)
    .then((data) => res.send(twiml.message(data).toString()))
    .catch((e) => {
      console.log(chalk`{bold.red ${e}}`);

      res.send(twiml.message('🙅 Whoooops didn\'t get that').toString());
    });
});

module.exports = router;
