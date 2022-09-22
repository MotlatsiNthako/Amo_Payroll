const express = require('express')
const router = express.Router()
const User = require('../models/logins')


//Getting all
router.get('/', async (req, res) => {
    try{
        const users = await User.find()
       res.json (users)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})
//Getting One
router.get('/:id', getUser, (req, res) => {
     res.json(res.user)  
})


async function getUser(req, res, next){
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null){
            return res.status(404).json({message: 'User not found' })
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.user = user
    next()
} 
module.exports = router

