module.exports = (req, res, next) => {
    if (req.url === '/dados') {
      const db = require('./db/db.json');
      res.json(db.dados);
    } else {
      next();
    }
};
  