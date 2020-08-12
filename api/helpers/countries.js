const fetch = require('node-fetch');
const fs = require('fs');
const { all } = require('../routes/countries');

const API_URLS = {
    "all" : "api/data/countries.json"
}

function fetchCountries(callback) {

    let allCountriesData;

    fs.readFile(API_URLS.all, 'utf8', (error, data) => {
        allCountriesData = JSON.parse(data);
        callback(allCountriesData);
    });
}

function fetchCountryBy(parameter, data, callback) {
    
    fetchCountries((allCountriesData) => {
        let countryData = {};
        data = data.toLowerCase();

        countryData = allCountriesData.filter(x => x[parameter].toLowerCase() === data);
        callback(countryData);
    });
}

function cleanData(data) {
    let jsonData = JSON.parse(data);
    let allCountriesData = [];

    for(let i=0;i<jsonData.length;i++)
    {
        let country = {};
        country["name"] = jsonData[i]["name"];
        country["alpha2Code"] = jsonData[i]["alpha2Code"];
        country["alpha3Code"] = jsonData[i]["alpha3Code"];
        country["capital"] = jsonData[i]["capital"];
        country["region"] = jsonData[i]["region"];
        country["subregion"] = jsonData[i]["subregion"];
        country["population"] = jsonData[i]["population"];
        country["flag"] = jsonData[i]["flag"];

        allCountriesData.push(country);
    }

    return allCountriesData;
}

module.exports = { fetchCountries, fetchCountryBy };