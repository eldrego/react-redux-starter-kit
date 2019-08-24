import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import util from 'util';

import database from './config/database';
import routes from './routes';

require('dotenv').config();

const debug = util.debuglog('server');
const port = process.env.PORT || 5000;

const app = express();
app.server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.static(`${__dirname}/./public`));

app.use('/api/v1/', routes);

app.get('/api/v1/', (req, res) => {
  res.send({ message: 'Welcome, built with NodeJs, Express and MongoDB' });
});

app.server.listen(port);

debug('\x1b[33m%s\x1b[0m', `Started on port ${port}`);

module.exports = app;
