const express = require('express');
const router = express.Router();

const countriesRoutes = require('./countries');

router.get('/', (req, res, next) => {
    res.json({"message":"Welcome to Rest countries API"});
});

router.use('/countries', countriesRoutes);

router.use((req, res, next) => {
    let error = new Error("Not Found");
    error.status = 404;
    next(error);
});

router.use((error, req, res, next) => {
    res
    .status(error.status || 500)
    .json({"error" : error.message});
});

module.exports = router;