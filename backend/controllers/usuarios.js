const db = require('../database/db');

// Lista todos os usuários (usado no select de cadastro de tarefas)
exports.listarUsuarios = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM usuarios ORDER BY nome ASC');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar usuários: " + error.message });
    }
};

// Cadastra um novo usuário
exports.cadastrarUsuario = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const query = 'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *';
        const { rows } = await db.query(query, [nome, email]);
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao cadastrar: " + error.message });
    }
};