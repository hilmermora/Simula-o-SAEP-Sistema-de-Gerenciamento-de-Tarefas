const express = require('express');
const path = require('path');
const app = express();

// Middleware para entender JSON (OBRIGATÓRIO para o fetch funcionar)
app.use(express.json());

// Servir os arquivos da pasta public (HTML, CSS, JS do front)
app.use(express.static(path.join(__dirname, '../public')));

// IMPORTAR AS ROTAS
const rotasUsuarios = require('./routes/usuarios');
const rotasTarefas = require('./routes/tarefas');

// DEFINIR OS PREFIXOS (O caminho que o fetch vai usar)
app.use('/api/usuarios', rotasUsuarios);
app.use('/api/tarefas', rotasTarefas);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});