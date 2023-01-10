const db = require('./model');

const byoaController = {};

// console.log('db: ', db.query);

byoaController.getUserData = (req, res, next) => {
  const sqlQuery = 'SELECT * FROM users;';

  db.query(sqlQuery).then((sqlRes) => {
    console.log('Query response: ', sqlRes.rows);
    res.locals = sqlRes.rows;

    return next();
  })
    .catch((e) => {
      next({
        log: `byoaController.getUserData error: ${e}`,
        message: { err: 'Failed to get User Data, see server logs' },
      });
    });
};

module.exports = byoaController;
