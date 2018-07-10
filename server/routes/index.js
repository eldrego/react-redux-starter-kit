import express from 'express';
import records from '../controllers/records';

const router = express.Router();

router.get('/all', records.getAll);

module.exports = router;
