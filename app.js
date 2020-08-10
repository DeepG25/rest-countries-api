const express = require('express');
const morgan = require('morgan');
const app = express();

const apiRoutes = require('./api/routes/index');

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.json({"message":"Welcome Buddy !!!"});
});

app.use('/api/v1', apiRoutes);

app.use((req, res, next) => {
    let error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res
    .status(error.status || 500)
    .json({"error" : error.message});
});

module.exports = app;