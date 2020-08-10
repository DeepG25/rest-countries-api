const express = require('express');
const router = express.Router();

const countriesRoutes = require('./countries');

router.get('/', (req, res, next) => {
    res.json({"message":"Welcome to Rest countries API"});
});

router.use('/countries', countriesRoutes);

module.exports = router;