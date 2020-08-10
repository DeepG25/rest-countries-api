const express = require('express');
const router = express.Router();

const fetchCountries = require('../helpers/countries');

router.get('/', (req, res, next) => {
    fetchCountries(function(data) {
        res
        .status(200)
        .json(data);
    });
});

router.get('/:country', (req, res, next) => {
    const country = req.params.country;
    res
    .status(200)
    .json({"message": `${country} Details`});
});

module.exports = router;