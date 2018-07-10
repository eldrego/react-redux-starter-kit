import winston from 'winston';
import Record from '../models/Record';

const records = {
  getAll(req, res) {
    Record.find((err, recordDocs) => {
      winston.info('info', recordDocs);
      return res.send({
        articles: recordDocs,
      });
    });
  }
};

export default records;
