const express = require("express")
const router = express.Router()
const controller = require('../controllers/participantesController')


router.get('/', controller.getAll)
// router.get('/buscar/:id', controller.get)
 router.get('/idade', controller.getIdade)
 router.get('/escolaridade', controller.getEscolaridade)
router.get('/informacoes', controller.getInformacoes)
//router.get('/itens', controller.getItens)
router.get('/genero', controller.getGenero)
router.post('/', controller.create)
router.put('/:nome', controller.update)
router.delete('/:nome', controller.remove)


module.exports = router