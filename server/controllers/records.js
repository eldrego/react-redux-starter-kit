import Record from '../models/Record';

exports.getAll = (req, res) => {
  Record.find().then((items) => {
    res.status(200).send({
      success: true, message: 'success', records: items
    });
  }).catch((error) => {
    res.status(404).send({
      success: false, message: 'failure', error
    });
  });
};

exports.create = (req, res) => {
  const newRecord = new Record(req.body);
  newRecord.save()
    .then((record) => {
      res.status(201).send({
        success: true,
        message: 'success',
        record,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: false,
        message: `Failure - ${error}`,
        error
      });
    });
};
