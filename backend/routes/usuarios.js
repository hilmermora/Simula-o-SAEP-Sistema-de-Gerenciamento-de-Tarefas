const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarios');

router.get('/', controller.listarUsuarios);
router.post('/', controller.cadastrarUsuario);

module.exports = router;