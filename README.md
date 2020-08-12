# Rest API 
It is the API that provides the information about the countries. It also has the filter feature that can help in search.

---

### Contents

- [Get all Countries](#Get-all-Countries)
- [Get Country By name](#Get-Country-By-name)
- [Get Country By code](#Get-Country-By-code)
- [Search with filters](#Search-with-filters)

### Get all Countries!
```
https://restcountries-dg.herokuapp.com/api/v1/countries/
```
eg. https://restcountries-dg.herokuapp.com/api/v1/countries/
Response of the above request is
```
{
    "statusCode": 200,
    "status": "OK",
    "value": [
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
        ..
    ]
}
```

---

### Get Country By name!
```
https://restcountries-dg.herokuapp.com/api/v1/countries/name/[country-name]
```
eg. https://restcountries-dg.herokuapp.com/api/v1/countries/name/india
Response of the above request is
```
{
    "statusCode": 200,
    "status": "OK",
    "value": [
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
}
```

---

### Get Country By code!
```
https://restcountries-dg.herokuapp.com/api/v1/countries/code/[alpha2Code]
```
eg. https://restcountries-dg.herokuapp.com/api/v1/countries/code/us
Response of the above request is
```
{
    "statusCode": 200,
    "status": "OK",
    "value": [
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
}
```

---

### Search with filters!
```
https://restcountries-dg.herokuapp.com/api/v1/countries/[query]?filter=[filterValue]
```

Here, query can be all possible values obtained in countries details eg. name, alpha2Code, capital, region, etc.

eg. https://restcountries-dg.herokuapp.com/api/v1/countries/name?filter=india
Response of the above request is
```
{
    "statusCode": 200,
    "status": "OK",
    "value": [
        {
            "name": "British Indian Ocean Territory",
            "alpha2Code": "IO",
            "alpha3Code": "IOT",
            "capital": "Diego Garcia",
            "region": "Africa",
            "subregion": "Eastern Africa",
            "population": 3000,
            "flag": "https://restcountries.eu/data/iot.svg"
        },
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
}
```