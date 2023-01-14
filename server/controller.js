const { resolve } = require('../webpack.common');
const db = require('./model');

const byoaController = {};

// console.log('db: ', db.query);

byoaController.getUserData = (req, res, next) => {
  const sqlQuery = "SELECT * FROM users;";

  db.query(sqlQuery)
    .then((sqlRes) => {
      console.log("Query response: ", sqlRes.rows);
      res.locals = sqlRes.rows;
      // res.locals.eqData.removed_from_service = sqlRes.rows.map(x => x.removed_from_service.slice(0,9));
      return next();
    })
    .catch((e) => {
      next({
        log: "byoaController.getUserData error: " + e,
        message: { err: "Failed to get User Data, see server logs" },
      });
    });
};

byoaController.getStoryData = (req, res, next) => {
  const sqlQuery = `SELECT * FROM stories WHERE id=${req.params.id};`;

  db.query(sqlQuery)
    .then((sqlRes) => {
      console.log("Query response: ", sqlRes.rows);
      res.locals.storyData = sqlRes.rows[0];
      return next();
    })
    .catch((e) => {
      next({
        log: "byoaController.getUserData error: " + e,
        message: { err: "Failed to get User Data, see server logs" },
      });
    });
};

byoaController.addUser = (req, res, next) =>{
  const sqlQuery = `INSERT INTO users(username, password) VALUES ('${req.params.username}', '${req.params.password}') RETURNING *;`;

  db.query(sqlQuery).then(sqlRes => {
    console.log('Query response: ', sqlRes.rows );
    res.locals.userData = sqlRes.rows[0];
    return next();
  })
  .catch(e => {
    next({
        log: 'byoaController.addUser error: ' + e,
        message: {err: 'Failed to add User, see server logs'} 
    });
  });
};

byoaController.confirmUser = (req, res, next) =>{
  const sqlQuery = `SELECT id FROM users WHERE username='${req.params.username}' 
  AND password='${req.params.password}';`

  db.query(sqlQuery).then(sqlRes => {
    console.log('Query response: ', sqlRes.rows );
    res.locals.userData = sqlRes.rows[0];
    return next();
  })
  .catch(e => {
    next({
      log: 'byoaController.confirmUser error: ' + e,
      message: {err: 'Failed to confirm User and password, see server logs'} 
    });
  });
};

byoaController.deleteUser = (req, res, next) => {
  const sqlQuery = `DELETE FROM users WHERE username='${req.params.username}'
  AND password='${req.params.password}';`

  db.query(sqlQuery).then(sqlRes => {
    console.log('Query response: ', sqlRes.rows);
    res.locals.userData = sqlRes.rows[0];
    return next();
  })
  .catch(e => {
    next({
      log: 'byoaController.deleteUser error: ' + e,
      message: {err: 'Failed to confirm User and password, see server logs'} 
    });
  });
};

// byoaController.updateSessionData = (req, res, next) =>{
//   const sqlQuery = `UPDATE users SET session_data = '${req.params.sessionData}' WHERE  `
// }

module.exports = byoaController;
