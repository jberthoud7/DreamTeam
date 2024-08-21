const express = require('express')
const router = express.Router()

//Player Controller
const { getPlayer, updatePlayerRating, getWorldRankings } = require('../controllers/playerController')
router.get('/player1/:dreamTeamId1/player2/:dreamTeamId2', getPlayer)
router.post('/updateRating', updatePlayerRating)
// router.get('/worldRankings/:page', getWorldRankings)
router.get('/worldRankings', getWorldRankings)


//User Controller
const { getUser } = require('../controllers/userController')
router.get('/getUser/:username', getUser)


//Proxy
const { getPlayerSeasonAvgs } = require('../proxy/proxy')
router.get('/getPlayerSeasonAvgs', getPlayerSeasonAvgs)



module.exports = router