const express = require('express')
const router = express.Router()

const { getPlayer } = require('../controllers/playerController')
const { updatePlayerRating } = require('../controllers/playerController')

router.get('/player1/:dreamTeamId1/player2/:dreamTeamId2', getPlayer)
router.post('/updateRating', updatePlayerRating)

module.exports = router