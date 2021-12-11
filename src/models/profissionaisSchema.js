const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProfissionalSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    }, 
    contato: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    profissao: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    informacoes: {
        type: String,
        required: true
    },
})

const profissionalCollection = mongoose.model('profissional', ProfissionalSchema)

module.exports = profissionalCollection
