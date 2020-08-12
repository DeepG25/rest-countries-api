const express = require('express');
const router = express.Router();

const { fetchCountries, fetchCountryByParameter, fetchCountriesByQuery } = require('../helpers/countries');

router.get('/', (req, res, next) => {
    fetchCountries((data) => {

        let countriesData = {};
        countriesData.statusCode = 200;
        countriesData.status = "OK";
        countriesData.value = data;

        res
        .status(200)
        .json(countriesData);
    });
});

router.get('/:id', (req, res, next) => {
    const query = req.query.filter;
    const id = req.params.id;

    if(query == undefined)
    {
        let countriesData = {};
        countriesData.statusCode = 400;
        countriesData.status = "Bad Request";
        countriesData.value = "Invalid URL please check docs at https://github.com/DeepG25/rest-countries-api";

        res
        .status(400)
        .json(countriesData);
    }
    else
    {
        fetchCountriesByQuery(id, query, (data) => {

            let countriesData = {};
            countriesData.statusCode = 200;
            countriesData.status = "OK";
            countriesData.value = data;

            res
            .status(200)
            .json(countriesData);
        });
    }
});

router.get('/name/:country', (req, res, next) => {
    const country = req.params.country;
    fetchCountryByParameter("name", country, (data) => {

        let countryData = {};
        countryData.statusCode = 200;
        countryData.status = "OK";
        countryData.value = data;

        res
        .status(200)
        .json(countryData);
    });
});

router.get('/code/:countryCode', (req, res, next) => {

    const countryCode = req.params.countryCode;
    fetchCountryByParameter("alpha2Code", countryCode, (data) => {

        let countryData = {};
        countryData.statusCode = 200;
        countryData.status = "OK";
        countryData.value = data;

        res
        .status(200)
        .json(countryData);
    });
});

router.use((req, res, next) => {
    let error = new Error("Not Found");
    error.status = 404;
    next(error);
});

router.use((error, req, res, next) => {
    res
    .status(error.status || 500)
    .json(
        {
            "statusCode": error.status || 500,
            "error" : error.message
        }
    );
});

module.exports = router;