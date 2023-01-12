const db = require("./model");

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

byoaController.getStory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sqlStoryQuery = `SELECT * FROM stories WHERE "id" = ${id}`;
    const storyFromDB = await db.query(sqlStoryQuery);
    console.log(storyFromDB.rows[0]);
    res.locals.story = storyFromDB.rows[0];
    return next();
  } catch (e) {
    return next({
      log: "Error in controller.getStory when querying db",
      status: 500,
      message: { e: "An error occured when querying for stories." },
    });
  }
};

module.exports = byoaController;
