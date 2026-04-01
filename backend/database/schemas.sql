-- Schema para Simulação SAEP - Gerenciador de Tarefas

-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Tabela de Tarefas
CREATE TABLE IF NOT EXISTS tarefas (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    descricao TEXT NOT NULL,
    setor VARCHAR(50) NOT NULL,
    prioridade VARCHAR(20) NOT NULL,
    status VARCHAR(20) DEFAULT 'A Fazer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_tarefas_usuario_id ON tarefas(usuario_id);
CREATE INDEX IF NOT EXISTS idx_tarefas_status ON tarefas(status);
