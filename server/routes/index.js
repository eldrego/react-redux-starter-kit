import express from 'express';
import records from '../controllers/records';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome to My Nodejs Application API' });
});

router.get('/all', records.getAll);
router.post('/create', records.create);

module.exports = router;
