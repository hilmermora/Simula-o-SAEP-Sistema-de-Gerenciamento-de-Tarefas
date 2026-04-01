const db = require("../database/db");

exports.criarUsuario = async (nome, email) => {
  const sql = "INSERT INTO usuarios (nome, email) VALUES ($1, $2)";
  return db.query(sql, [nome, email]);
};

exports.listarUsuarios = async () => {
  const result = await db.query("SELECT * FROM usuarios");
  return result.rows;
};
