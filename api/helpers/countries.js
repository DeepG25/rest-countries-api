const fetch = require('node-fetch');

const API_URLS = {
    "all" : "https://restcountries.eu/rest/v2/all"
}

function fetchCountries(callback) {

    let allCountriesData;

    fetch(API_URLS.all)
    .then(res => res.json())
    .then(data => {
        allCountriesData = data;
        callback(allCountriesData);
    });
}

module.exports = fetchCountries;