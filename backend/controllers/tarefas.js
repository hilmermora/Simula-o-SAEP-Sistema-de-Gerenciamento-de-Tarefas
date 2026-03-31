const db = require('../database/db');

// Busca todas as tarefas
exports.listarTarefas = async (req, res) => {
    try {
        const query = 'SELECT * FROM tarefas ORDER BY data_cadastro DESC';
        const { rows } = await db.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar tarefas" });
    }
};

// Cria uma nova tarefa (status padrão 'a fazer' definido no SQL)
exports.criarTarefa = async (req, res) => {
    try {
        const { id_usuario, descricao, setor, prioridade } = req.body;
        const query = `
            INSERT INTO tarefas (id_usuario, descricao, setor, prioridade) 
            VALUES ($1, $2, $3, $4) RETURNING *`;
        
        const { rows } = await db.query(query, [id_usuario, descricao, setor, prioridade]);
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao criar tarefa: " + error.message });
    }
};

// Atualiza a tarefa (Status ou Descrição)
exports.atualizarTarefa = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, descricao } = req.body;

        // Se veio status no corpo, atualiza o status
        if (status) {
            await db.query('UPDATE tarefas SET status = $1 WHERE id = $2', [status, id]);
        } 
        // Se veio descrição, atualiza a descrição
        if (descricao) {
            await db.query('UPDATE tarefas SET descricao = $1 WHERE id = $2', [descricao, id]);
        }

        res.status(200).json({ mensagem: "Atualizado com sucesso" });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao atualizar" });
    }
};

// Deleta a tarefa
exports.excluirTarefa = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM tarefas WHERE id = $1', [id]);
        res.status(200).json({ mensagem: "Tarefa removida" });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao excluir" });
    }
};