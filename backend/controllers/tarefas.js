const Tarefa = require("../models/tarefas");

exports.criar = async (req, res) => {
  const { usuario_id, descricao, setor, prioridade } = req.body;

  if (!usuario_id || !descricao || !setor || !prioridade) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    await Tarefa.criarTarefa(req.body);
    res.json({ success: true, message: "Tarefa criada!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
};

exports.listar = async (req, res) => {
  try {
    const dados = await Tarefa.listarTarefas();
    res.json(dados);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao listar tarefas" });
  }
};

exports.atualizar = async (req, res) => {
  const id = req.params.id;
  const dados = req.body;

  if (!dados.descricao || !dados.setor || !dados.prioridade || !dados.status) {
    return res.status(400).json({ error: "Campos obrigatórios: descricao, setor, prioridade, status" });
  }

  try {
    await Tarefa.atualizarTarefa(id, dados);
    res.json({ success: true, message: "Tarefa atualizada!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
};

exports.deletar = async (req, res) => {
  try {
    await Tarefa.deletarTarefa(req.params.id);
    res.json({ success: true, message: "Tarefa excluída" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao deletar tarefa" });
  }
};
