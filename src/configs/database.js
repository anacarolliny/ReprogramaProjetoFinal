const mongoose = require('mongoose')

const connect = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/reprograma", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco de dados conectado")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connect
}