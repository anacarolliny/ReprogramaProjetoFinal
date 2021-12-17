const express = require("express")
const router = express.Router()
const controller = require('../controllers/profissionaisController')


router.get('/', controller.getAll)
//router.get('/buscar/:id', controller.get)
router.get('/profissao', controller.getProfissao)
router.get('/area', controller.getArea)
router.get('/nomes', controller.getNome)
router.post('/', controller.create)
router.put('/:nome', controller.update)
router.delete('/:nome', controller.remove)


module.exports = router