const express = require('express')
const { getWinner, getWinners, createWinner, updateWinner } = require('../controllers/winner')
const router = express.Router()


router.route('/').get(getWinners).post(createWinner)
module.exports = router
