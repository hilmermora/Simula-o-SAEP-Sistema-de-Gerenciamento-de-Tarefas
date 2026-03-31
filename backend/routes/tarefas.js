const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefas');

// GET /api/tarefas -> Busca todas as tarefas para o Kanban
router.get('/', tarefaController.listarTarefas);

// POST /api/tarefas -> Cria uma nova tarefa
router.post('/', tarefaController.criarTarefa);

// PUT /api/tarefas/:id -> Atualiza status ou descrição (usamos o ID na URL)
router.put('/:id', tarefaController.atualizarTarefa);

// DELETE /api/tarefas/:id -> Remove uma tarefa
router.delete('/:id', tarefaController.excluirTarefa);

module.exports = router;