import winston from 'winston';
import Article from '../models/Article';

const articles = {
  getAll(req, res) {
    Article.find((err, articlesDocs) => {
      winston.info('info', articlesDocs);
      return res.send({
        articles: articlesDocs,
      });
    });
  }
};

export default articles;
