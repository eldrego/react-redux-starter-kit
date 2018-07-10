import express from 'express';
import articles from '../controllers/articles';

const router = express.Router();

router.get('/all', articles.getAll);

module.exports = router;
