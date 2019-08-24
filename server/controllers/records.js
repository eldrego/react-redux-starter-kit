import { Record } from '../models/Record';

exports.getAll = async (req, res) => {
  try {
    const records = await Record.find({}).lean();
    if (records) {
      res.status(200).json({
        success: true,
        message: 'success',
        records
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'An error occured',
      error: `${error}`
    });
  }
};

exports.create = async (req, res) => {
  try {
    const newRecord = new Record(req.body);
    const savedRecord = await newRecord.save();
    if (savedRecord) {
      res.status(201).json({
        success: true,
        message: 'success',
        record: savedRecord,
      });
    }
  } catch (error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'An error has occurred',
        error: `${error.message}`,
      });
    }
    return res.status(500).json({
      success: false,
      message: 'An error has occurred',
      error: `${error}`,
    });
  }
};
