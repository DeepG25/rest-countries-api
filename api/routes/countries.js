const express = require('express');
const router = express.Router();

const { fetchCountries, fetchCountryByParameter, fetchCountriesByQuery } = require('../helpers/countries');

router.get('/', (req, res, next) => {
    fetchCountries((data) => {
        res
        .status(200)
        .json(data);
    });
});

router.get('/:id', (req, res, next) => {
    const query = req.query.filter;
    const id = req.params.id;
    fetchCountriesByQuery(id, query, (data) => {
        res
        .status(200)
        .json(data);
    });
});

router.get('/name/:country', (req, res, next) => {
    const country = req.params.country;
    fetchCountryByParameter("name", country, (data) => {
        res
        .status(200)
        .json(data);
    });
});

router.get('/code/:countryCode', (req, res, next) => {
    const countryCode = req.params.countryCode;
    fetchCountryByParameter("alpha2Code", countryCode, (data) => {
        res
        .status(200)
        .json(data);
    });
});

module.exports = router;