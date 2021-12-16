const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../swagger/swagger_output.json");


const profissionaisRoute = require('./routes/profissionaisRoutes')
const participantesRoute = require('./routes/participantesRoutes')

const database = require('./configs/database')
database.connect()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/profissionais', profissionaisRoute)
app.use('/api/participantes', participantesRoute)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
dotenv.config()

app.get('/', (req, res) => {
    res.send('Seja Bem vindo(a)! ')
})



module.exports = app