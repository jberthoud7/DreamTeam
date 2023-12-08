const asyncHandler = require('express-async-handler')

const getTest = asyncHandler(async (req, res) => {
    res.status(200).json({msg: "test get"})
})

const postTest = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400).json({msg: 'Please add text field'})
    }
    res.status(200).json({msg: "test post"})
})



module.exports = {
    getTest, postTest
}