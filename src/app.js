require('dotenv').config()
const dotenv = require('dotenv')
const { config } = require('dotenv');
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../swagger_output.json");
const bodyParser = require("body-parser")
const database = require('./configs/database')
database.connect()

const personRoutes = require("./routes/personRoutes")

app.use(
  express.urlencoded({
      extended: true
  }),
)


app.use(cors())
app.use(express.json())
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.urlencoded({extended:false}))

app.use('/person', personRoutes)
dotenv.config()

module.exports = app