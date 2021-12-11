const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ParticipantesSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: String,
        required: true
    },
    idade: {
        type: String,
        required: true,
    },    
    genero: {
        type: String,
        required: true,
    },
    escolaridade: {
        type: String,
        required: true,
    },
    contato: {
        type: String,
        required: true,
    },
    dataDeEntrada: {
        type: String,
        required: true,
    },
    informacoesNecessarias: {
        type: String,
        required: true,
    },
    itensNecessarios: {
        type: String,
        required: true,
    },
    informacoesAdicionais: {
        type: String,
        required: true,
    },
    criadoEm: {
        type: Date,
        default: new Date(),
    },
    atualizadoEm: {
        type: Date,
        default: new Date(),
    },
});

const participantesCollection = mongoose.model('participantes', ParticipantesSchema)

module.exports = participantesCollection
