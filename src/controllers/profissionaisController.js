const profissionalCollection = require('../models/profissionaisSchema')


const getAll = async(req, res) => {
    const { profissao, area, nome } = req.query
    
    const filters = {}

    if (profissao) {
        filters.profissao = profissao
    }

    if (area) {
        filters.area = area
    }

    if (nome) {
        filters.nome = nome
    }


    const profissional = await profissionalCollection.find(filters)
    return res.status(200).send(profissional)
} 

const get = async (req, res) => {
    try {
        const { id } = req.params

        const profissional = await profissionalCollection.findById(id)

        return res.status(200).send(profissional)
    } catch (error) {
        return res.status(404).send({ message: 'Profissional não encontrado' })
    }
}


const create = async (req, res) => {
    try {
        const profissional = await profissionalCollection.create(req.body)
        return res.status(201).send(profissional)
    } catch (error){
        return res.status(400).send({message: error.message})
    }
}

module.exports = {
    getAll,
    get,
    create,
    
}