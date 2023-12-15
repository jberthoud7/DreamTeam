const express = require('express')
const router = express.Router()

const { getPlayer, updatePlayerRating, getWorldRankings } = require('../controllers/playerController')

router.get('/player1/:dreamTeamId1/player2/:dreamTeamId2', getPlayer)
router.post('/updateRating', updatePlayerRating)

// router.get('/worldRankings/:page', getWorldRankings)
router.get('/worldRankings', getWorldRankings)

module.exports = router