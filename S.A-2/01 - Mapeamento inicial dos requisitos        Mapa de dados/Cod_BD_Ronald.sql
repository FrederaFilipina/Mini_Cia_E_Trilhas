DROP DATABASE mini_cia_e_trilhas;

CREATE DATABASE mini_cia_e_trilhas;
USE mini_cia_e_trilhas;


CREATE TABLE trilha(
    id_trilha INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    regiao VARCHAR (100),
    nome VARCHAR(200),
    ponto_partida VARCHAR(200),
    ponto_chegada VARCHAR(200),
    distancia DECIMAL(10,2),
    tempo TIME,
    relevo VARCHAR(200),
    elevacao INT,
    dificuldade INT
);
INSERT INTO trilha
(regiao, nome, ponto_partida, ponto_chegada, distancia, tempo, relevo, elevacao, dificuldade)
VALUES
('Sul', 'Trilha da Lagoinha do Leste', 'Pântano do Sul', 'Praia da Lagoinha do Leste', 4.20, '01:20:00', 'Costão/Mata Atlântica', 250, 4),
('Sul', 'Trilha dos Naufragados', 'Caieira da Barra do Sul', 'Praia dos Naufragados', 2.60, '00:50:00', 'Floresta/Costão', 100, 2),
('Leste', 'Trilha da Costa da Lagoa', 'Canto dos Araçás', 'Comunidade da Costa da Lagoa', 7.50, '02:10:00', 'Mata Atlântica', 150, 3),
('Leste', 'Trilha do Gravatá', 'Praia Mole (entrada)', 'Praia do Gravatá', 1.00, '00:30:00', 'Costão/Rochoso', 60, 1),
('Leste', 'Trilha da Galheta', 'Praia Mole', 'Praia da Galheta', 0.80, '00:20:00', 'Areia/Costão', 40, 1),
('Leste', 'Trilha do Morro da Coroa', 'Mirante da Lagoinha do Leste', 'Topo do Morro da Coroa', 1.20, '00:40:00', 'Montanhoso/Rochoso', 200, 3),
('Central', 'Trilha do Poção', 'Córrego Grande (Entrada)', 'Cachoeira do Poção', 0.70, '00:20:00', 'Floresta/Mata', 80, 1),
('Sul', 'Trilha do Morro do Lampião', 'Rua Pau de Canela, Campeche', 'Cume do Morro do Lampião', 2.80, '01:30:00', 'Montanhoso/Rochoso', 180, 2),
('Leste', 'Trilha da Barra da Lagoa → Piscinas Naturais', 'Barra da Lagoa (início)', 'Piscinas Naturais da Barra da Lagoa', 0.60, '00:15:00', 'Costão/Rochoso', 30, 1),
('Norte', 'Trilha do Morro do Rapa', 'Praia Brava', 'Praia da Lagoinha do Norte (via Morro do Rapa)', 2.80, '01:30:00', 'Costão/Mata', 150, 2);



CREATE TABLE usuario(
    id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    cpf BIGINT(11) UNIQUE NOT NULL,
    dt_nascimento DATE,
    sexo ENUM('Masculino','Feminino') NOT NULL,       
    num_celular BIGINT(11) UNIQUE,
    email VARCHAR(200) UNIQUE NOT NULL,
    senha VARCHAR(64) NOT NULL
);
INSERT INTO usuario (nome, cpf, dt_nascimento, sexo, num_celular, email, senha) VALUES
('Ana Souza', 12345678901, '1990-05-12', 'Feminino', 11987654321, 'ana.souza@email.com', 'senha123'),
('Bruno Lima', 23456789012, '1988-03-22', 'Masculino', 21998765432, 'bruno.lima@email.com', 'bruno2024'),
('Carla Mendes', 34567890123, '1995-07-15', 'Feminino', 31991234567, 'carla.mendes@email.com', 'carla!pass'),
('Diego Rocha', 45678901234, '1992-09-08', 'Masculino', 11992345678, 'diego.rocha@email.com', 'dr@2023'),
('Eduarda Silva', 56789012345, '1999-01-30', 'Feminino', 21993456789, 'eduarda.silva@email.com', 'eduarda#1'),
('Felipe Santos', 67890123456, '1985-11-11', 'Masculino', 31994567890, 'felipe.santos@email.com', 'f3lipes'),
('Gabriela Costa', 78901234567, '1998-04-19', 'Feminino', 41995678901, 'gabriela.costa@email.com', 'g@briela'),
('Henrique Alves', 89012345678, '1993-06-23', 'Masculino', 51996789012, 'henrique.alves@email.com', 'henrique12'),
('Isabela Torres', 90123456789, '2000-10-05', 'Feminino', 61997890123, 'isabela.torres@email.com', 'isa_pass'),
('João Pereira', 11223344556, '1987-02-17', 'Masculino', 71998901234, 'joao.pereira@email.com', 'joao@321');



CREATE TABLE evento(
    id_evento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dia DATE,
    horario TIME,
    ponto_de_encontro VARCHAR(200),
    vagas INT,
    condicao ENUM ("Ativo", "Concluido") DEFAULT("Ativo"),
    trilha_id INT,
    FOREIGN KEY (trilha_id) REFERENCES trilha (id_trilha)
);
INSERT INTO evento ( dia, horario, ponto_de_encontro, vagas, trilha_id) VALUES
('2025-11-06', '08:30:00', 'Entrada do Parque Pedra Azul', 5, 1),
('2025-11-06', '07:00:00', 'Portaria do Itatiaia', 20, 2),
('2025-11-15', '05:00:00', 'Base do Pico da Bandeira', 10, 3),
('2025-11-20', '09:00:00', 'Praia de Ponta Negra', 25, 4),
('2025-11-25', '06:00:00', 'Centro de Visitantes Chapada', 12, 5);



CREATE TABLE participante(
    id_participante INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    classe ENUM('C','P'),
    FOREIGN KEY (usuario_id) REFERENCES usuario (id_usuario),
    evento_id INT,
    FOREIGN KEY (evento_id) REFERENCES evento (id_evento)
);
INSERT INTO participante (classe, usuario_id, evento_id) VALUES
("C", 1, 1), ("C", 2, 1), ("C", 3, 1), ("C", 4, 1),
("C", 5, 2), ("C", 6, 2), ("C", 7, 2), ("C", 8, 2),
("C", 9, 3), ("C", 10, 3), ("C", 1, 3), ("C", 2, 3),
("C", 3, 4), ("C", 4, 4), ("C", 5, 4), ("C", 6, 4),
("C", 7, 5), ("C", 8, 5), ("C", 9, 5), ("C", 10, 5);






-- Comando para CADASTRAR novo Usuário (i)
INSERT INTO usuario
(nome, email, cpf, senha, sexo)
VALUES
();
-- Comando para CADASTRAR novo Usuário (i)

-- Comando para VERIFICAR se o LOGIN está correto(i)
SELECT id_usuario, email, senha FROM usuario
WHERE email = 'e-mail@email.mail'
AND senha = 'senha123';
-- Comando para VERIFICAR se o LOGIN está correto(f)

-- Comando para criar os Cards da página HOME LogOff (i)
SELECT trilha.nome AS 'nomeTrilha', evento.dia AS 'data', evento.horario AS 'horário', (evento.vagas - COUNT(participante.id_participante)) AS 'vagasDisp'FROM evento
JOIN trilha
ON evento.trilha_id = trilha.id_trilha
LEFT JOIN participante
ON participante.evento_id = evento.id_evento
WHERE condicao = "Ativo"
GROUP BY trilha.nome, evento.dia, evento.horario, evento.vagas

HAVING (evento.vagas - COUNT(participante.id_participante)) > 0
AND evento.dia BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 5 DAY);
-- Comando para criar os Cards da página HOME LogOff (i)

-- Comando para criar os Cards da página AGENDA LogOff/LogIn (i)
SELECT trilha.nome AS 'nomeTrilha', evento.dia AS 'data', evento.horario AS 'horário', (evento.vagas - COUNT(participante.id_participante)) AS 'vagasDisp' FROM evento
JOIN trilha
ON evento.trilha_id = trilha.id_trilha
LEFT JOIN participante
ON participante.evento_id = evento.id_evento
WHERE condicao = "Ativo"
GROUP BY trilha.nome, evento.dia, evento.horario, evento.vagas

HAVING (evento.vagas - COUNT(participante.id_participante)) > 0
AND CONCAT(evento.dia, ' ', evento.horario) >= NOW()
ORDER BY evento.dia, evento.horario;
-- Comando para criar os Cards da página AGENDA LogOff / LogIn (i)

-- Comando para criar os Cards da página TRILHAS LogOff (i)
SELECT trilha.nome AS 'nomeTrilha', trilha.distancia AS 'distância', trilha.tempo AS 'tempo', trilha.dificuldade AS 'dificuldade' FROM trilha
GROUP BY trilha.nome, trilha.distancia, trilha.tempo, trilha.dificuldade;
-- Comando para criar os Cards da página TRILHAS LogOff (i)

-- Comando para criar os Cards da página TRILHAS LogIn (i)
SELECT trilha.nome AS 'nomeTrilha', trilha.ponto_partida AS 'pontoInicial', trilha.ponto_chegada AS 'pontoFinal', trilha.distancia AS 'distância', trilha.tempo AS 'tempo', trilha.relevo AS 'tipoRelevo', trilha.elevacao AS 'grauElevação', trilha.dificuldade AS 'dificuldade' FROM trilha
GROUP BY trilha.nome, trilha.ponto_partida, trilha.ponto_chegada, trilha.distancia, trilha.tempo, trilha.relevo, trilha.elevacao, trilha.dificuldade;
-- Comando para criar os Cards da página TRILHAS LogIn (i)

-- Comando para criar uma adicionar um EVENTO (i)
INSERT INTO evento (criador_id, dia, horario, ponto_de_encontro, vagas, trilha_id) VALUES();
-- Comando para criar uma adicionar um EVENTO (i)

-- Comando para alterar informação do EVENTO (i)
UPDATE evento SET dia = ?, horario = ?, ponto_de_encontro = ?, vagas = ? WHERE id_evento = ? AND criador_id = ?;
-- Comando para alterar informação do EVENTO (i)

-- Comando para alterar a condicao do EVENTO (i)
UPDATE evento SET condicao = ? WHERE id_evento = ? AND criador_id = ?;
-- Comando para alterar a condicao do EVENTO (i)

-- Comando para deletar o EVENTO (i)
DELIMITER &&
DELETE FROM participante WHERE evento_id = ?;
DELETE FROM evento WHERE id_evento = ?;
&&
-- Comando para deletar o EVENTO (i)

-- Comando para alterar informação do USUARIO (i)
UPDATE usuario SET num_celular = ?, email = ? WHERE id_usuario = ? AND senha = ?;
-- Comando para alterar informação do USUARIO (i)

-- Comando para alterar senha do USUARIO (i)
UPDATE usuario SET senha = "carro" WHERE id_usuario = 1 AND senha = "senha123";
-- Comando para alterar senha do USUARIO (i)

-- Comando para deletar o USUARIO (i)
DELIMITER &&
DELETE FROM participante WHERE usuario_id = 3;
DELETE FROM usuario WHERE id_usuario = 3;
&&
-- Comando para deletar o USUARIO (i)

-- Comando para buscar o USUARIO por ID (i)
SELECT nome, dt_nascimento, cpf, sexo, num_celular, email FROM usuario WHERE id_usuario = 1;
-- Comando para buscar o USUARIO por ID (i)

SELECT
u.id_usuario,
    -- 1. Total de Trilhas Feitas
    COUNT(t.id_trilha) AS Total_de_Trilhas_Feitas,

    -- 9. Distância Total Feita
    SUM(t.distancia) AS Distancia_Total_Percorrida_em_Km,

    -- Quantidade de Trilhas por Região (2, 3, 4, 5)
    SUM(CASE WHEN t.regiao = 'Norte' THEN 1 ELSE 0 END) AS Quantidade_de_Trilhas_na_Regiao_Norte,
    SUM(CASE WHEN t.regiao = 'Central' THEN 1 ELSE 0 END) AS Quantidade_de_Trilhas_na_Regiao_Central,
    SUM(CASE WHEN t.regiao = 'Leste' THEN 1 ELSE 0 END) AS Quantidade_de_Trilhas_na_Regiao_Leste,
    SUM(CASE WHEN t.regiao = 'Sul' THEN 1 ELSE 0 END) AS Quantidade_de_Trilhas_na_Regiao_Sul,

    -- Distância Total por Região (10, 11, 12, 13)
    SUM(CASE WHEN t.regiao = 'Norte' THEN t.distancia ELSE 0 END) AS Distancia_Total_na_Regiao_Norte_em_Km,
    SUM(CASE WHEN t.regiao = 'Central' THEN t.distancia ELSE 0 END) AS Distancia_Total_na_Regiao_Central_em_Km,
    SUM(CASE WHEN t.regiao = 'Leste' THEN t.distancia ELSE 0 END) AS Distancia_Total_na_Regiao_Leste_em_Km,
    SUM(CASE WHEN t.regiao = 'Sul' THEN t.distancia ELSE 0 END) AS Distancia_Total_na_Regiao_Sul_em_Km,

    -- Quantidade de Trilhas por Dificuldade (6, 7, 8)
    -- Assumindo X=1, Y=2 e Z=3 (Dificuldades presentes nos dados)
    SUM(CASE WHEN t.dificuldade = 1 THEN 1 ELSE 0 END) AS Quantidade_de_Trilhas_Dificuldade_1,
    SUM(CASE WHEN t.dificuldade = 2 THEN 1 ELSE 0 END) AS Quantidade_de_Trilhas_Dificuldade_2,
    SUM(CASE WHEN t.dificuldade = 3 THEN 1 ELSE 0 END) AS Quantidade_de_Trilhas_Dificuldade_3

FROM
    usuario u
JOIN
    participante  p ON u.id_usuario = p.usuario_id
JOIN
    evento e ON p.evento_id = e.id_evento
JOIN
    trilha t ON e.trilha_id = t.id_trilha
WHERE u.id_usuario = 2 
