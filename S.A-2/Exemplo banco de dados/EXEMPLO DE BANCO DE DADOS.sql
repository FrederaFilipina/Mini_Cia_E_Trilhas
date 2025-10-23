CREATE DATABASE mini_cia_e_trilhas;

USE mini_cia_e_trilhas;

CREATE TABLE usuario(
id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(200) UNIQUE NOT NULL,
cpf BIGINT(11) UNIQUE NOT NULL,
dt_nascimento DATE NOT NULL,
sexo ENUM('Masculino','Feminino') NOT NULL,
num_celular BIGINT(11) UNIQUE NOT NULL,
email VARCHAR(200) NOT NULL,
nome_usuario VARCHAR(200) UNIQUE NOT NULL,
senha VARCHAR(64) NOT NULL
);

CREATE TABLE trilha(
id_trilha INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(200),
ponto_partida VARCHAR(200),
ponto_chegada VARCHAR(200),
distancia DECIMAL(10,2),
tempo TIME,
relevo VARCHAR(200),
elevacao INT,
dificuldade INT
);

CREATE TABLE evento(
id_evento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
data_evento DATE,
horario TIME,
ponto_de_encontro VARCHAR(200),
vagas INT,
usuario_id INT,
FOREIGN KEY (usuario_id)
REFERENCES usuario (id_usuario),
trilha_id INT,
FOREIGN KEY (trilha_id)
REFERENCES trilha (id_trilha)
);

INSERT INTO trilha (nome, ponto_partida, ponto_chegada, distancia, tempo, relevo, elevacao, dificuldade) VALUES
('Trilha do Pico do Urubu', 'Base da Montanha', 'Cume do Pico', 8.50, '03:30:00', 'Montanhoso e rochoso', 1200, 4),
('Caminho das Águas Claras', 'Entrada do Parque', 'Cachoeira Principal', 4.20, '01:45:00', 'Plano com aclives suaves', 50, 2),
('Travessia da Serra', 'Vila Alpina', 'Praia dos Ventos', 15.00, '06:00:00', 'Serra, mata atlântica', 850, 5),
('Circuito do Lago Azul', 'Estacionamento Leste', 'Mirante do Lago', 6.80, '02:30:00', 'Ondulado, terra batida', 150, 3),
('Rota Histórica', 'Centro Antigo', 'Ruínas do Forte', 2.50, '01:00:00', 'Urbano e paralelepípedos', 20, 1);



-- 2. Seed para a tabela 'usuario' (5 registros)

-- NOTA: As senhas estão sendo criptografadas com SHA-256, resultando em 64 caracteres hexadecimais,
-- o que corresponde ao novo VARCHAR(64) da sua tabela.

INSERT INTO usuario (nome, cpf, dt_nascimento, sexo, num_celular, email, nome_usuario, senha) VALUES
('Ana Clara Souza', 12345678901, '1995-10-20', 'Feminino', 21987654321, 'ana.souza@email.com', 'anaclara_trilheira', SHA2('senha123', 256)),
('Bruno Felipe Santos', 98765432109, '1988-03-15', 'Masculino', 11998765432, 'bruno_aventura@mail.com', 'bruno_aventura', SHA2('outrasenha456', 256)),
('Carlos Eduardo Lima', 45612378900, '2001-07-28', 'Masculino', 31976543210, 'carlos.lima@email.com', 'carloseduardo_br', SHA2('minhasenha789', 256)),
('Diana Mendes Oliveira', 78901234567, '1990-11-05', 'Feminino', 48991234567, 'diana.mendes@email.com', 'diana_explorer', SHA2('explorador01', 256)),
('Enzo Gabriel Ferreira', 10987654321, '1985-01-01', 'Masculino', 51982345678, 'enzo.ferreira@email.com', 'enzo_ferreira', SHA2('testesenha10', 256));



-- 3. Seed para a tabela 'evento' (5 registros)

-- NOTA: Os 'usuario_id' e 'trilha_id' referenciam os IDs criados nas seeds acima (de 1 a 5).

INSERT INTO evento (data_evento, horario, ponto_de_encontro, vagas, usuario_id, trilha_id) VALUES
('2025-11-10', '08:00:00', 'Estacionamento da Base', 25, 2, 1), -- Bruno organiza o Pico do Urubu
('2025-11-18', '09:30:00', 'Quiosque Principal', 40, 1, 2), -- Ana Clara organiza o Caminho das Águas
('2025-12-05', '06:00:00', 'Rodoviária da Vila Alpina', 15, 5, 3), -- Enzo organiza a Travessia
('2025-12-20', '14:00:00', 'Entrada Leste do Parque', 30, 4, 4), -- Diana organiza o Circuito do Lago
('2026-01-15', '10:00:00', 'Praça Central', 50, 3, 5); -- Carlos organiza a Rota Histórica

DROP DATABASE mini_cia_e_trilhas;