-- Tabela de usuários
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Tabela de tarefas
CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    descricao TEXT NOT NULL,
    setor VARCHAR(100) NOT NULL,
    prioridade VARCHAR(10) NOT NULL CHECK (prioridade IN ('Baixa', 'Média', 'Alta')),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(10) DEFAULT 'A Fazer' CHECK (status IN ('A Fazer', 'Fazendo', 'Pronto')),

    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
