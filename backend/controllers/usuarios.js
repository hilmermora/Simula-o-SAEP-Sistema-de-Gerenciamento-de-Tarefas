const db = require('../database/db');

exports.listarUsuarios = async (req, res) => {
    try {
        // Usando aspas duplas para garantir que o Postgres localize a tabela exata
        const { rows } = await db.query('SELECT * FROM "usuarios" ORDER BY nome ASC');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.cadastrarUsuario = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const query = 'INSERT INTO "usuarios" (nome, email) VALUES ($1, $2) RETURNING *';
        const { rows } = await db.query(query, [nome, email]);
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json({ erro: "Erro no banco: " + error.message });
    }
};