import express from 'express';
import records from '../controllers/records';

const router = express.Router();

router.get('/record', records.getAll);
router.post('/record', records.create);

module.exports = router;
