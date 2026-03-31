const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefas');

router.get('/', controller.listarTarefas);
router.post('/', controller.criarTarefa);
router.put('/:id', controller.atualizarTarefa);
router.delete('/:id', controller.excluirTarefa);

module.exports = router;