import Record from '../models/Record';

const records = {
  getAll(req, res) {
    Record.find((err, recordDocs) => {
      return res.send({
        articles: recordDocs,
        statusCode: 200,
      });
    });
  }
};

export default records;
