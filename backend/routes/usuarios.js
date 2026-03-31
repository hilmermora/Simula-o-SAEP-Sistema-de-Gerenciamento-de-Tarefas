const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios');

// GET /api/usuarios -> Lista todos para preencher o select
router.get('/', usuarioController.listarUsuarios);

// POST /api/usuarios -> Cadastra um novo no banco
router.post('/', usuarioController.cadastrarUsuario);

module.exports = router;