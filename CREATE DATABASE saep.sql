CREATE DATABASE saep;


--usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE
);
-- tarefas
CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL,
    descricao TEXT NOT NULL,
    setor VARCHAR(100) NOT NULL,
    prioridade VARCHAR(10) CHECK (prioridade IN ('baixa', 'media', 'alta')) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'a fazer' 
        CHECK (status IN ('a fazer', 'fazendo', 'pronto')),

    FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

SELECT * FROM usuarios;
SELECT * FROM tarefas;
