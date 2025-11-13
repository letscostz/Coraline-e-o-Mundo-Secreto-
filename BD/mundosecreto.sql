CREATE DATABASE MundoSecreto;
USE MundoSecreto;

CREATE TABLE mundos (
idMundo INT PRIMARY KEY,
nome VARCHAR(45),
descricao VARCHAR(100)
);

CREATE TABLE personagens (
idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
descricao VARCHAR(100),
papel VARCHAR(45),
fkMundo INT,
	CONSTRAINT fkMundoPersonagem
		FOREIGN KEY (fkMundo) REFERENCES mundos(idMundo)
);

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL,
senha VARCHAR(50) NOT NULL,
data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
personagem_favorito INT,
	CONSTRAINT fkPersonagemUsuario
		FOREIGN KEY (personagem_favorito) REFERENCES personagens (idPersonagem)
);

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
qtdPerguntas INT,
titulo VARCHAR(100)
);

CREATE TABLE perguntas (
idPergunta INT,
fkQuiz INT,
pergunta VARCHAR(100),
	CONSTRAINT fkQuizPergunta
		FOREIGN KEY (fkQuiz) REFERENCES quiz (idQuiz),
	CONSTRAINT pkPerguntas
		PRIMARY KEY (idPergunta, fkQuiz)
);

CREATE TABLE alternativas (
idAlternativa INT,
fkPergunta INT,
fkPerguntaQuiz INT,
alternativa VARCHAR(100),
	CONSTRAINT fkPerguntasAlternativas
		FOREIGN KEY (fkPergunta, fkPerguntaQuiz) REFERENCES perguntas (idPergunta, fkQuiz),
	CONSTRAINT pkAlternativas
		PRIMARY KEY (idAlternativa, fkPergunta, fkPerguntaQuiz)
);

CREATE TABLE resultado (
idResultado INT,
fkUsuario INT,
fkQuiz INT,
qtdAcertos INT,
	CONSTRAINT fkResultadoUsuario
		FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
	CONSTRAINT fkResultadoQuiz
		FOREIGN KEY (fkQuiz) REFERENCES quiz (idQuiz),
	CONSTRAINT pkResultado
		PRIMARY KEY (idResultado, fkUsuario, fkQuiz)
);
