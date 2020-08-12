## Rest API 
It is the API that provides the information about the countries and their other details.

## API

#### Get all Countries!
```
http://localhost:3000/api/v1/countries
```
eg. http://localhost:3000/api/v1/countries
Response of the above request is
```
[
    {
        "name": "Afghanistan",
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "capital": "Kabul",
        "region": "Asia",
        "subregion": "Southern Asia",
        "population": 27657145,
        "flag": "https://restcountries.eu/data/afg.svg"
    },
    { .. },
    { .. },
    ...
]
```

#### Get Country By name!
```
http://localhost:3000/api/v1/countries/name/[country-name]
```
eg. http://localhost:3000/api/v1/countries/name/india
Response of the above request is
```
[
    {
        "name": "India",
        "alpha2Code": "IN",
        "alpha3Code": "IND",
        "capital": "New Delhi",
        "region": "Asia",
        "subregion": "Southern Asia",
        "population": 1295210000,
        "flag": "https://restcountries.eu/data/ind.svg"
    }
]
```

#### Get Country By code!
```
http://localhost:3000/api/v1/countries/code/[alpha2Code]
```
eg. http://localhost:3000/api/v1/countries/code/us
Response of the above request is
```
[
    {
        "name": "United States of America",
        "alpha2Code": "US",
        "alpha3Code": "USA",
        "capital": "Washington, D.C.",
        "region": "Americas",
        "subregion": "Northern America",
        "population": 323947000,
        "flag": "https://restcountries.eu/data/usa.svg"
    }
]
```