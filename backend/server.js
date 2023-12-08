const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/test', require('./routes/testRoutes'))




app.listen(port, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`))