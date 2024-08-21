const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

const getUser = asyncHandler(async(req, res) => {

    // console.log(88)

    const username = req.params.username
    console.log("name:" +  username)

    const user = await User.findOne({"username": username})

    res.status(200).json( user )
})


module.exports = { getUser }