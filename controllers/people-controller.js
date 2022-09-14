const express = require('express');
const router = express.Router();
const { People } = require('../models')

///////////////////////////////
// ROUTES
////////////////////////////////

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await People.find({}));
    } catch(err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try {
        res.status(201).json(await People.create(req.body));
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;