const db = require('../database/db');

exports.listarTarefas = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM "tarefas" ORDER BY id ASC');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.criarTarefa = async (req, res) => {
    try {
        const { id_usuario, descricao, setor, prioridade } = req.body;
        const query = `INSERT INTO "tarefas" (id_usuario, descricao, setor, prioridade, status) 
                       VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const { rows } = await db.query(query, [id_usuario, descricao, setor, prioridade, 'a fazer']);
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.atualizarTarefa = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, descricao } = req.body;
        if (status) await db.query('UPDATE "tarefas" SET status = $1 WHERE id = $2', [status, id]);
        if (descricao) await db.query('UPDATE "tarefas" SET descricao = $1 WHERE id = $2', [descricao, id]);
        res.json({ msg: "Atualizado" });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.excluirTarefa = async (req, res) => {
    try {
        await db.query('DELETE FROM "tarefas" WHERE id = $1', [req.params.id]);
        res.json({ msg: "Removido" });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};