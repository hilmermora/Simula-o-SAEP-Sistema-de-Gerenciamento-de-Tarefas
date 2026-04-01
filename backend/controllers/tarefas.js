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

exports.status = async (req, res) => {
  try {
    await Tarefa.atualizarStatus(req.params.id, req.body.status);
    res.json({ success: true, message: "Status atualizado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao atualizar status" });
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
