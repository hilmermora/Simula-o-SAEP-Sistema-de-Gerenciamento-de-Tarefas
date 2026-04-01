const Usuario = require("../models/usuarios");

exports.criar = async (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    await Usuario.criarUsuario(nome, email);
    res.json({ success: true, message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao cadastrar usuário" });
  }
};

exports.listar = async (req, res) => {
  try {
    const dados = await Usuario.listarUsuarios();
    res.json(dados);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao listar usuários" });
  }
};
