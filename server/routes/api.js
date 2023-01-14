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

router.post('/user/:username/:password',
  byoaController.addUser,
  (req, res) => {
  console.log('user added in apiRouter ', res.locals.userData);
  res.status(200).json(res.locals.userData);
  }
);

router.get('/user/:username/:password',
  byoaController.confirmUser,
  (req, res)=> {
    if(typeof res.locals.userData.id === 'number'){
      return res.status(200).json(res.locals.userData)
    }  
  }
);

router.delete('/user/:username/:password',
  byoaController.deleteUser,
  (req, res) => {
    res.status(410).json(res.locals.userData)
  }
);


module.exports = router;