require('dotenv').config()
const { config } = require('dotenv');
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

app.get('/', (req, res) => {
    res.json({message: 'Oi Mundo! '})
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.xywnj.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
.then(() => {
    console.log('Conectamos ao MongoDB.')
    app.listen(3000)
})
.catch((err) => console.log(err))


//mongodb+srv://herikmitre:aspire20@apicluster.xywnj.mongodb.net/bancodaapi?retryWrites=true&w=majority