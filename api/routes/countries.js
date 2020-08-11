const express = require('express');
const router = express.Router();

const { fetchCountries, fetchCountry } = require('../helpers/countries');

router.get('/', (req, res, next) => {
    fetchCountries((data) => {
        res
        .status(200)
        .json(data);
    });
});

router.get('/name/:country', (req, res, next) => {
    const country = req.params.country;
    fetchCountry(country, (data) => {
        res
        .status(200)
        .json(data);
    });
});

module.exports = router;