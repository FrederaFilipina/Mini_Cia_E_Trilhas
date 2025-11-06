DROP DATABASE mini_cia_e_trilhas;

CREATE DATABASE mini_cia_e_trilhas;
USE mini_cia_e_trilhas;


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
INSERT INTO trilha
(nome, ponto_partida, ponto_chegada, distancia, tempo, relevo, elevacao, dificuldade)
VALUES
('Trilha da Pedra Azul', 'Domingos Martins', 'Pedra Azul', 8.5, '02:30:00', 'Montanhoso', 450, 3),
('Trilha da Cachoeira Véu de Noiva', 'Parque do Itatiaia', 'Cachoeira Véu de Noiva', 6.2, '01:45:00', 'Floresta', 180, 2),
('Trilha do Pico da Bandeira', 'Alto Caparaó', 'Pico da Bandeira', 12.0, '05:00:00', 'Montanhoso', 2890, 5),
('Trilha do Morro do Careca', 'Natal', 'Topo do Morro', 3.0, '00:50:00', 'Arenoso', 120, 1),
('Trilha das 7 Quedas', 'Chapada dos Veadeiros', 'Vale das 7 Quedas', 14.8, '06:20:00', 'Cerrado', 520, 4),
('Trilha do Cambirela', 'Palhoça', 'Cume do Cambirela', 9.0, '04:00:00', 'Montanhoso', 960, 4),
('Trilha da Lagoa do Peri', 'Florianópolis', 'Lagoa do Peri', 5.5, '01:20:00', 'Floresta', 150, 2),
('Trilha da Serra do Cipó', 'Santana do Riacho', 'Cachoeira Grande', 7.8, '02:00:00', 'Pedregoso', 340, 3),
('Trilha da Gruta Azul', 'Bonito', 'Gruta Azul', 4.2, '01:00:00', 'Calcário', 90, 2),
('Trilha do Pico do Jaraguá', 'São Paulo', 'Pico do Jaraguá', 5.0, '01:40:00', 'Montanhoso', 372, 3);



CREATE TABLE usuario(
    id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) UNIQUE NOT NULL,
    cpf BIGINT(11) UNIQUE NOT NULL,
    dt_nascimento DATE NOT NULL,
    sexo ENUM('Masculino','Feminino') NOT NULL,
    num_celular BIGINT(11) UNIQUE NOT NULL,
    email VARCHAR(200) NOT NULL,
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
    trilha_id INT,
    FOREIGN KEY (trilha_id) REFERENCES trilha (id_trilha)
);
INSERT INTO evento (dia, horario, ponto_de_encontro, vagas, trilha_id) VALUES
('2025-11-06', '08:30:00', 'Entrada do Parque Pedra Azul', 5, 1),
('2025-11-06', '07:00:00', 'Portaria do Itatiaia', 20, 2),
('2025-11-15', '05:00:00', 'Base do Pico da Bandeira', 10, 3),
('2025-11-20', '09:00:00', 'Praia de Ponta Negra', 25, 4),
('2025-11-25', '06:00:00', 'Centro de Visitantes Chapada', 12, 5);



CREATE TABLE participante(
    id_participante INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    classe ENUM('C','P'),
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario (id_usuario),
    evento_id INT,
    FOREIGN KEY (evento_id) REFERENCES evento (id_evento)
);
INSERT INTO participante (classe, usuario_id, evento_id) VALUES
('C', 1, 1), ('P', 2, 1), ('P', 3, 1), ('P', 4, 1),
('C', 5, 2), ('P', 6, 2), ('P', 7, 2), ('P', 8, 2),
('C', 9, 3), ('P', 10, 3), ('P', 1, 3), ('P', 2, 3),
('C', 3, 4), ('P', 4, 4), ('P', 5, 4), ('P', 6, 4),
('C', 7, 5), ('P', 8, 5), ('P', 9, 5), ('P', 10, 5);






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

-- Comando para criar os Cards da página HOME (i)
SELECT trilha.nome AS 'Nome da Trilha', evento.dia AS 'Data', evento.horario AS 'Horário', (evento.vagas - COUNT(participante.id_participante)) AS 'Vagas Disp.' FROM evento
JOIN trilha
ON evento.trilha_id = trilha.id_trilha
LEFT JOIN participante
ON participante.evento_id = evento.id_evento
GROUP BY trilha.nome, evento.dia, evento.horario, evento.vagas

HAVING (evento.vagas - COUNT(participante.id_participante)) > 0
AND evento.dia BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 5 DAY);
-- Comando para criar os Cards da página HOME (i)

-- Comando para criar os Cards da página AGENDA (i)
SELECT trilha.nome AS 'Nome da Trilha', evento.dia AS 'Data', evento.horario AS 'Horário', (evento.vagas - COUNT(participante.id_participante)) AS 'Vagas Disp.' FROM evento
JOIN trilha
ON evento.trilha_id = trilha.id_trilha
LEFT JOIN participante
ON participante.evento_id = evento.id_evento
GROUP BY trilha.nome, evento.dia, evento.horario, evento.vagas

HAVING (evento.vagas - COUNT(participante.id_participante)) > 0
AND CONCAT(evento.dia, ' ', evento.horario) >= NOW()
ORDER BY evento.dia, evento.horario;
-- Comando para criar os Cards da página AGENDA (i)

-- Comando para criar os Cards da página TRILHAS (i)
SELECT trilha.nome AS 'Nome da Trilha', trilha.distancia AS 'Distância', trilha.tempo AS 'Tempo', trilha.dificuldade AS 'Dificuldade' FROM evento
JOIN trilha
ON evento.trilha_id = trilha.id_trilha
GROUP BY trilha.nome, trilha.distancia, trilha.tempo, trilha.dificuldade;
-- Comando para criar os Cards da página TRILHAS (i)
