const participantesCollection = require('../models/participantesSchema')


const getAll = async(req, res) => {
    const { idade, escolaridade, informacoesNecessarias, itensNecessarios, genero } = req.query
    
    const filters = {}

    if (idade) {
        filters.idade = idade
    }

    if (escolaridade) {
        filters.escolaridade = escolaridade
    }

    if (informacoesNecessarias) {
        filters.informacoesNecessarias = informacoesNecessarias
    }

    if (itensNecessarios) {
        filters.itensNecessarios = itensNecessarios
    }

    if (genero) {
        filters.genero = genero
    }


    const participantes = await participantesCollection.find(filters)
    return res.status(200).send(participantes)
} 


const getIdade = async (req, res) => {
    const idade = await participantesCollection.find({}, {
        _id: 0,
        idade: 1
      });
      return res.status(200).send(idade)
}

const getEscolaridade = async (req, res) => {
    const escolaridade = await participantesCollection.find({}, {
        _id: 0,
        escolaridade: 1
      });
      return res.status(200).send(escolaridade)
}
const getInformacoes = async (req, res) => {
    const informacoesNecessarias = await participantesCollection.find({}, {
        _id: 0,
        informacoesNecessarias: 1,
        itensNecessarios: 1,
        informacoesAdicionais:1
      });
      return res.status(200).send(informacoesNecessarias)
}
const getItens = async (req, res) => {
    const itensNecessarios = await participantesCollection.find({}, {
        _id: 0,
        itensNecessarios: 1
      });
      return res.status(200).send(itensNecessarios)
}

const getGenero = async (req, res) => {
    const genero = await participantesCollection.find({}, {
        _id: 0,
        genero: 1
      });
      return res.status(200).send(genero)
}

// const get = async (req, res) => {
//     try {
//         const { id } = req.params

//         const participantes = await participantesCollection.findById(id)

//         return res.status(200).send(participantes)
//     } catch (error) {
//         return res.status(404).send({ message: 'participantes não encontrado' })
//     }
// }



const create = async (req, res) => {
    try {
        const participantes = await participantesCollection.create(req.body)
        return res.status(201).send(participantes)
    } catch (error){
        return res.status(400).send({message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const { nome } = req.params
        const body = req.body
        const update = {new: true}

        const participante = await participantesCollection.findOneAndUpdate(nome, body, update)
        return res.status(200).send(participante)
    } catch (error) {
        return res.status(404).send({message: 'Participante para Atualização não encontrado'})
    }
}


const remove = async (req, res) => {
    
    try {
        const { nome } =  await participantesCollection.findOneAndDelete(req.params)
        // const { nome } = req.params

        // await profissionalCollection.findOneAndDelete(nome)
        

        //return res.status(204).send("Deletado com sucesso falta fazer funcionar a mensagem")
        return res.status(204).send({message: 'Dados deletados deletado'})
    } catch (error) {
        return res.status(404).send({ message: 'Participante para deletar não encontrado' })
    }
}



module.exports = {
    getAll,
    getIdade,
    getEscolaridade,
    getInformacoes,
    getItens,
    getGenero,
    create,
    update,
    remove
    
}