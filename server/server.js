const express = require('express');
const path = require('path');

const app = express();
// const apiRouter = require('./routes/api');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * handle requests for static files
app.use(express.static(path.resolve(__dirname, '../build')));

// Test route
app.get('/test', (req, res) => {
    console.log('inside the server')
    return res.sendFile(path.resolve(__dirname, '../index.html'));
})

// catch-all route handler for any requests to an unknown route
app.use((req, res) => {
    console.log('catch-all route handler deployed');
    res.sendStatus(404);
  });

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log('ERROR: ', errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

// Start the server
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });