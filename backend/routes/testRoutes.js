const express = require('express')
const router = express.Router()

const { getTest, postTest } = require('../controllers/testController')

router.get('/', getTest)
router.post('/', postTest)

module.exports = router