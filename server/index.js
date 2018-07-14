import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import winston from 'winston';
import path from 'path';

import database from './config/database';
import routes from './routes';

require('dotenv').config();

const port = process.env.PORT || 8080;

const app = express();
app.server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(`${__dirname}/../client/dist`));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
// });

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the Journal Authentication' });
});

app.use('/api/v1/', routes);

app.server.listen(port);

winston.info(`Started on port ${port}`, 'info');

module.exports = app;
