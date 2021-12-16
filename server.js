require("dotenv").config
const app = require('./src/app')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App Rodando Lisinho http://localhost:${PORT}`)
    //console.log(`Swagger is running in http://${process.env.HOST}:${process.env.PORT}/doc/#/`)

})