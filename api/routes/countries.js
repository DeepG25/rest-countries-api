const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({"message": "All countries Details"});
});

router.get('/:country', (req, res, next) => {
    const country = req.params.country;
    res.json({"message": `${country} Details`});
});

module.exports = router;