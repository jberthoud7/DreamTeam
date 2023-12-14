const express = require('express')
const router = express.Router()

const { getPlayer } = require('../controllers/playerController')

// router.get('/test', getTest)
// router.post('/', postTest)

router.get('/player1/:dreamTeamId1/player2/:dreamTeamId2', getPlayer)

module.exports = router