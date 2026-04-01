const db = require("../database/db");

exports.criarTarefa = async (dados) => {
  const sql = `
    INSERT INTO tarefas 
    (usuario_id, descricao, setor, prioridade, status) 
    VALUES ($1, $2, $3, $4, $5)
  `;

  return db.query(sql, [
    dados.usuario_id,
    dados.descricao,
    dados.setor,
    dados.prioridade,
    'A Fazer'
  ]);
};

exports.listarTarefas = async () => {
  const result = await db.query(`
    SELECT t.*, u.nome 
    FROM tarefas t
    JOIN usuarios u ON t.usuario_id = u.id
  `);

  return result.rows;
};

exports.atualizarStatus = async (id, status) => {
  return db.query(
    "UPDATE tarefas SET status = $1 WHERE id = $2",
    [status, id]
  );
};

exports.deletarTarefa = async (id) => {
  return db.query("DELETE FROM tarefas WHERE id = $1", [id]);
};

exports.atualizarTarefa = async (id, dados) => {
  const sql = `
    UPDATE tarefas 
    SET 
      usuario_id = $1,
      descricao = $2,
      setor = $3,
      prioridade = $4,
      status = $5
    WHERE id = $6
  `;
  return db.query(sql, [
    dados.usuario_id,
    dados.descricao,
    dados.setor,
    dados.prioridade,
    dados.status,
    id
  ]);
};
