require('dotenv').config();
const bodyParser = require('body-parser');
const boom = require('express-boom');
const chalk = require('chalk');
const express = require('express');
const morgan = require('morgan');
const query = require('./routes/query');

const app = express();
const { APP_NAME, APP_PORT } = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(boom());
app.use(morgan('combined'));
app.use('/query', query);
app.use((_, res) => res.boom.notFound());

app.listen(APP_PORT, () => console.log(chalk`{bold.blueBright ${APP_NAME} started on ${APP_PORT} @ ${Date.now()}}`));
