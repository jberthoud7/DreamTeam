const asyncHandler = require('express-async-handler')

const Player = require('../models/playerModel')

// const postTest = asyncHandler(async (req, res) => {
//     if(!req.body.text){
//         res.status(400).json({msg: 'Please add text field'})
//     }

//     const test = await Test.create({
//         text: req.body.text,
//     })
//     res.status(200).json(test)
// })

const getPlayer = asyncHandler(async (req, res) => {
    // console.log("in getPlayer")

    const dreamTeamId1 = req.params.dreamTeamId1
    const dreamTeamId2 = req.params.dreamTeamId2
    
    const player1 = await Player.findOne({"dreamTeamId": dreamTeamId1})
    const player2 = await Player.findOne({"dreamTeamId": dreamTeamId2})

    res.status(200).send({"player1" : player1, "player2" : player2})
})



module.exports = {
    getPlayer
}