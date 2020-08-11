const fetch = require('node-fetch');
const fs = require('fs');
const { all } = require('../routes/countries');

const API_URLS = {
    "all" : "api/data/countries.json"
}

function fetchCountries(callback) {

    let allCountriesData;

    fs.readFile(API_URLS.all, 'utf8', (error, data) => {
        allCountriesData = cleanData(data);
        callback(allCountriesData);
    });
}

function fetchCountry(country, callback) {
    
    fetchCountries((allCountriesData) => {
        let countryData = {};
        country = country.toLowerCase();

        for(let i=0;i<allCountriesData.length;i++)
        {
            if(allCountriesData[i].name.toLowerCase() === country)
            {
                countryData = allCountriesData[i];
                break;
            }
        }
        console.log(country, countryData);

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

module.exports = { fetchCountries, fetchCountry };