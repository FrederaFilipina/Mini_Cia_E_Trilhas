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

CREATE TABLE evento(
id_evento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
data_evento DATE,
horario TIME,
ponto_de_encontro VARCHAR(200),
vagas INT,

trilha_id INT,
FOREIGN KEY (trilha_id)
REFERENCES trilha (id_trilha)
);

CREATE TABLE participante(
id_participante INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
classe ENUM ("C", "P"),

usuario_id INT,
FOREIGN KEY (usuario_id)
REFERENCES usuario (id_uruario),

evento_id INT,
FOREIGN KEY (evento_id)
REFERENCES evento (id_evento)
);