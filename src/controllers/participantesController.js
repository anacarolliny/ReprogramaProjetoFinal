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


// const getProfissao = async (req, res) => {
//     const profissao = await profissionalCollection.find({}, {
//         _id: 0,
//         profissao: 1
//       });
//       return res.status(200).send(profissao)
// }

// const getArea = async (req, res) => {
//     const profissao = await profissionalCollection.find({}, {
//         _id: 0,
//         area: 1
//       });
//       return res.status(200).send(profissao)
// }
// const getNome = async (req, res) => {
//     const nome = await profissionalCollection.find({}, {
//         _id: 0,
//         nome: 1
//       });
//       return res.status(200).send(nome)
// }

// const get = async (req, res) => {
//     try {
//         const { id } = req.params

//         const profissional = await profissionalCollection.findById(id)

//         return res.status(200).send(profissional)
//     } catch (error) {
//         return res.status(404).send({ message: 'Profissional não encontrado' })
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

// const update = async (req, res) => {
//     try {
//         const { nome } = req.params
//         const body = req.body
//         const update = {new: true}

//         const profissional = await profissionalCollection.findOneAndUpdate(nome, body, update)
//         return res.status(200).send(profissional)
//     } catch (error) {
//         return res.status(404).send({message: 'Profissional para Atualização não encontrado'})
//     }
// }


// const remove = async (req, res) => {
//     try {
//         const { nome } = req.params

//         await profissionalCollection.findOneAndDelete(nome)

//         return res.status(204).send("Deletado com sucesso falta fazer funcionar a mensagem")
//     } catch (error) {
//         return res.status(404).send({ message: 'Profissional para deletar não encontrado' })
//     }
// }


module.exports = {
    getAll,
    // get,
    // getProfissao,
    // getArea,
    // getNome,
    create
    // update,
    // remove
    
}