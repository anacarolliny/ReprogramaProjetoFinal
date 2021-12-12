const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')


const profissionaisRoute = require('./routes/profissionaisRoutes')
const participantesRoute = require('./routes/participantesRoutes')

const database = require('./configs/database')
database.connect()

app.use(cors())
app.use(express.json())

app.use('/api/profissionais', profissionaisRoute)
app.use('/api/participantes', participantesRoute)
dotenv.config()

app.get('/', (req, res) => {
    res.send('Seja Bem vindo(a) a minha API')
})



module.exports = app