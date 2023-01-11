const express = require("express");
const controller = require("./controller");

const router = express.Router();

//ADD ROUTES FOR DIFFERENT ACTIONS

//login routes:

//signup routes:

//routes to /home

//routes to /story
router.get("/story/:id", controller.getStory, (req, res) => {
  return res.status(200).json(res.locals.story);
});

//routes to /go

//map routes to /map

//routes to /drink

//Export Router
module.exports = router;
