const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const routeUrls = require('./routes/routes')
const cors = require("cors")
const port = process.env.PORT || 5050

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connection is established"))

app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)


app.listen(port, () => console.log(`app running on port: ${port}... `))