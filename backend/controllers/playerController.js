const asyncHandler = require('express-async-handler')

const Player = require('../models/playerModel')


const getPlayer = asyncHandler(async (req, res) => {
    const dreamTeamId1 = req.params.dreamTeamId1
    const dreamTeamId2 = req.params.dreamTeamId2
    
    const player1 = await Player.findOne({"dreamTeamId": dreamTeamId1})
    const player2 = await Player.findOne({"dreamTeamId": dreamTeamId2})

    res.status(200).send({"player1" : player1, "player2" : player2})
})

const updatePlayerRating = asyncHandler(async (req, res) => {
    const newRating = req.body.newRating
    const id = req.body.dreamTeamId

    const updatedPlayer = await Player.updateOne({dreamTeamId: id}, {$set: {eloRating : newRating}})
    
    res.status(200).json(updatedPlayer)
})

const getWorldRankings = asyncHandler(async (req, res) => {
    const rankings = await Player.find({}).sort({eloRating: "desc"}).limit(5)

    res.status(200).json(rankings)
})



module.exports = {
    getPlayer, updatePlayerRating, getWorldRankings
}