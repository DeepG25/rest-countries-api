const express = require('express');
const router = express.Router();

const { fetchCountries, fetchCountryBy } = require('../helpers/countries');

router.get('/', (req, res, next) => {
    fetchCountries((data) => {
        res
        .status(200)
        .json(data);
    });
});

router.get('/name/:country', (req, res, next) => {
    const country = req.params.country;
    fetchCountryBy("name", country, (data) => {
        res
        .status(200)
        .json(data);
    });
});

router.get('/code/:countryCode', (req, res, next) => {
    const countryCode = req.params.countryCode;
    fetchCountryBy("alpha2Code", countryCode, (data) => {
        res
        .status(200)
        .json(data);
    });
});

module.exports = router;