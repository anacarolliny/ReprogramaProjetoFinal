const express = require('express')
const app = express()
const cors = require('cors')

const profissionaisRoute = require('./routes/profissionaisRoutes')

const database = require('./configs/database')
database.connect()

app.use(cors())
app.use(express.json())

app.use('/profissionais', profissionaisRoute)

app.get('/', (req, res) => {
    res.send('Seja Bem vindo(a) a minha API')
})



module.exports = app