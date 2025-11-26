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
descricao VARCHAR(150),
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
fkPerguntaQuiz INT DEFAULT 1,
alternativa VARCHAR(100),
	CONSTRAINT fkPerguntasAlternativas
		FOREIGN KEY (fkPergunta, fkPerguntaQuiz) REFERENCES perguntas (idPergunta, fkQuiz),
	CONSTRAINT pkAlternativas
		PRIMARY KEY (idAlternativa, fkPergunta, fkPerguntaQuiz)
);

CREATE TABLE resultado (
idResultado INT AUTO_INCREMENT,
fkUsuario INT,
fkQuiz INT DEFAULT 1,
qtdAcertos INT,
	CONSTRAINT fkResultadoUsuario
		FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
	CONSTRAINT fkResultadoQuiz
		FOREIGN KEY (fkQuiz) REFERENCES quiz (idQuiz),
	CONSTRAINT pkResultado
		PRIMARY KEY (idResultado, fkUsuario, fkQuiz)
);

INSERT INTO mundos VALUES
(1, 'Mundo Real', 'Um lugar comum e sem brilho, marcado pela rotina, silêncio e sensação de vazio'),
(2, 'Outro Mundo', 'Um mundo colorido e acolhedor à primeira vista, mas com perigos ocultos nas sombras');

INSERT INTO personagens (nome, descricao, papel, fkMundo) VALUES
('Coraline', 'Garota curiosa que explora um novo mundo cheio de mistérios.', 'Protagonista', 1),
('Wybie', 'Vizinho tímido e leal que ajuda nos acontecimentos estranhos.', 'Ajudante', 1),
('Mãe', 'Mulher ocupada e séria, envolvida na rotina do dia a dia.', 'Responsável', 1),
('Pai', 'Homem gentil e atarefado, sempre dedicado ao trabalho.', 'Responsável', 1),
('Outra Mãe', 'Figura charmosa e sombria que cria um mundo ilusório.', 'Antagonista', 2),
('Gato', 'Animal enigmático que orienta e observa tudo no outro mundo.', 'Guia', 2),
('Bobinsky', 'Vizinho excêntrico e atlético, cheio de histórias estranhas.', 'Cômico', 1),
('Spink', 'Atriz aposentada, dramática e supersticiosa.', 'Cômico', 1),
('Forcible', 'Atriz exótica e extravagante, sempre teatral.', 'Cômico', 1);

INSERT INTO quiz (qtdPerguntas, titulo) VALUES
(10, 'O quanto você sabe sobre Coraline e o Mundo Secreto');

INSERT INTO perguntas VALUES 
(1, 1, 'Onde Coraline encontra a porta secreta pela primeira vez?'),
(2, 1, 'Qual é a principal característica dos moradores do Outro Mundo?'),
(3, 1, 'Quem avisa Coraline sobre os perigos do Outro Mundo?'),
(4, 1, 'O que a Outra Mãe deseja fazer com Coraline?'),
(5, 1, 'Qual item Coraline usa para encontrar as almas das crianças fantasmas?'),
(6, 1, 'Qual vizinho apresenta ratos acrobatas em seu espetáculo?'),
(7, 1, 'Em qual lugar do Outro Mundo Coraline enfrenta a Outra Mãe pela última vez?'),
(8, 1, 'Como Coraline finalmente encerra o acesso ao Outro Mundo?'),
(9, 1, 'O que indica que o Outro Mundo estava pronto antes mesmo de Coraline se mudar?'),
(10, 1, 'Como a Outra Mãe enganou cada uma das crianças fantasmas?');

INSERT INTO alternativas (idAlternativa, fkPergunta, alternativa) VALUES 
(1, 1, 'No quarto dela'),
(2, 1, 'Na cozinha'),
(3, 1, 'Na sala de estar'),
(4, 1, 'No porão'),
(5, 1, 'No sótão');

INSERT INTO alternativas (idAlternativa, fkPergunta, alternativa) VALUES
(1, 2, 'Têm a pele azul'),
(2, 2, 'Usam roupas iguais'),
(3, 2, 'Têm olhos de botão'),
(4, 2, 'Falam em sussurros'),
(5, 2, 'São invisíveis'),
(1, 3, 'Bobinsky'),
(2, 3, 'Wybie'),
(3, 3, 'O gato'),
(4, 3, 'A mãe verdadeira'),
(5, 3, 'Spink'),
(1, 4, 'Transformá-la em boneca'),
(2, 4, 'Levar para o mundo real'),
(3, 4, 'Costurar botões em seus olhos'),
(4, 4, 'Prendê-la na sala pequena do escritório'),
(5, 4, 'Roubar sua voz'),
(1, 5, 'Uma lanterna'),
(2, 5, 'Um amuleto verde'),
(3, 5, 'Uma chave dourada'),
(4, 5, 'Um medalhão de pedra'),
(5, 5, 'Um espelho mágico'),
(1, 6, 'Wybie'),
(2, 6, 'Bobinsky'),
(3, 6, 'Pai de Coraline'),
(4, 6, 'Forcible'),
(5, 6, 'Gato'),
(1, 7, 'No jardim'),
(2, 7, 'No porão'),
(3, 7, 'Na sala de jantar'),
(4, 7, 'No corredor da porta'),
(5, 7, 'No teatro'),
(1, 8, 'Queima a porta'),
(2, 8, 'Enterra a chave'),
(3, 8, 'Tranca e joga a chave no poço'),
(4, 8, 'Entrega a chave ao pai'),
(5, 8, 'Deixa a porta aberta'),
(1, 9, 'Os ratos já observavam a casa'),
(2, 9, 'A porta já tinha sido aberta antes'),
(3, 9, 'A boneca de Coraline já existia'),
(4, 9, 'A chave estava enferrujada'),
(5, 9, 'O gato seguia Coraline'),
(1, 10, 'Usou comida enfeitiçada'),
(2, 10, 'Ofereceu presentes mágicos'),
(3, 10, 'Mostrou versões perfeitas de suas vidas'),
(4, 10, 'Fez promessas sobre seus pais'),
(5, 10, 'Deu brinquedos amaldiçoados');

SELECT * FROM usuario;
SELECT * FROM resultado;
SELECT * FROM resultado 
WHERE fkUsuario = 1
ORDER BY idResultado DESC LIMIT 1;
INSERT INTO resultado VALUES
(4, 1, 1, 5);