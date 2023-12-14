const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require('cors');

connectDB()

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.use('/dreamTeam', require('./routes/testRoutes'))




app.listen(port, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`))