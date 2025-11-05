DROP DATABASE mini_cia_e_trilhas;

CREATE DATABASE mini_cia_e_trilhas;
USE mini_cia_e_trilhas;

CREATE TABLE infTrilha(
id_infTrilha INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(200),
ponto_partida VARCHAR(200),
ponto_chegada VARCHAR(200),
distancia DECIMAL(10,2),
tempo TIME,
relevo VARCHAR(200),
elevacao INT,
dificuldade INT
);

INSERT INTO infTrilha
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


CREATE TABLE trilha(
id_trilha INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
dia DATE,
horario TIME,
ponto_de_encontro VARCHAR(200),
vagas INT,

infTrilha_id INT,
FOREIGN KEY (infTrilha_id)
REFERENCES infTrilha (id_infTrilha)
);

INSERT INTO trilha (dia, horario, ponto_de_encontro, vagas, infTrilha_id) VALUES
('2025-11-10', '07:00:00', 'Entrada do Parque Pedra Azul', 15, 1),
('2025-11-12', '08:30:00', 'Portaria do Itatiaia', 20, 2),
('2025-11-15', '05:00:00', 'Base do Pico da Bandeira', 10, 3),
('2025-11-20', '09:00:00', 'Praia de Ponta Negra', 25, 4),
('2025-11-25', '06:00:00', 'Centro de Visitantes Chapada', 12, 5);


CREATE TABLE participante(
id_participante INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
classe ENUM ("C", "P"),

usuario_id INT,
FOREIGN KEY (usuario_id)
REFERENCES usuario (id_usuario),

trilha_id INT,
FOREIGN KEY (trilha_id)
REFERENCES trilha (id_trilha)
);

INSERT INTO participante (classe, usuario_id, trilha_id) VALUES
('C', 1, 1), ('P', 2, 1), ('P', 3, 1), ('P', 4, 1),
('C', 5, 2), ('P', 6, 2), ('P', 7, 2), ('P', 8, 2),
('C', 9, 3), ('P', 10, 3), ('P', 1, 3), ('P', 2, 3),
('C', 3, 4), ('P', 4, 4), ('P', 5, 4), ('P', 6, 4),
('C', 7, 5), ('P', 8, 5), ('P', 9, 5), ('P', 10, 5);

SELECT
trilha.id_trilha,
infTrilha.nome,
trilha.dia,
trilha.horario,
trilha.vagas,
count(participante.id_participante) AS participantes
FROM infTrilha
JOIN trilha
ON trilha.infTrilha_id = infTrilha.id_infTrilha
JOIN participante
ON trilha.id_trilha = participante.trilha_id
GROUP BY trilha.id_trilha;






