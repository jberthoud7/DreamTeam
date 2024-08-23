const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require('cors');


connectDB()

const app = express()

app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true}))
app.use(express.urlencoded({extended: false}))

app.use('/dreamTeam', require('./routes/routes'))





app.listen(port, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`))