import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import winston from 'winston';
import path from 'path';

import database from './config/database';
import routes from './routes';

const app = express();
app.server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
});

app.use('/api/v1/', routes);

app.server.listen(process.env.PORT || 8080);

winston.info(`Started on port ${app.server.address().port}`, 'info');

export default app;
