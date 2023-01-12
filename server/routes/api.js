const express = require('express');

const byoaController = require('../controller');

const router = express.Router();

router.get('/story/:id',
  byoaController.getStoryData,
  (req, res) => {
    console.log('storyData in apiRouter: ', res.locals.storyData);
    res.status(200).json(res.locals.storyData);
  }
);

module.exports = router;