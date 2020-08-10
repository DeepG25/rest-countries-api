const express = require('express');
const app = express();

const apiRoutes = require('./api/routes/index');

app.use(express.json());

app.get('/', (req, res, next) => {
    res.json({"message":"Welcome Buddy !!!"});
});

app.use('/api/v1', apiRoutes);

module.exports = app;