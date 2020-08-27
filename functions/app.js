require('dotenv').config();

const bodyParser = require('body-parser');
const boom = require('express-boom');
const express = require('express');
const morgan = require('morgan');
const serverless = require('serverless-http');
const query = require('./routes/query');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(boom());
app.use(morgan('combined'));
app.use('/.netlify/functions/app/query', query);
app.use((_, res) => res.boom.notFound());

module.exports = app;
module.exports.handler = serverless(app);
