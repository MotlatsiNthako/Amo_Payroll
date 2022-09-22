const express = require('express')
const router = express.Router()
const Company = require('../models/company.js')


//Getting all
router.get('/', async (req, res) => {
    try{
        const company = await Company.find()
       res.json (company)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})

module.exports = router

