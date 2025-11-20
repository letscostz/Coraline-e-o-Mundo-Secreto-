var database = require("../database/config");

function inserirResultado(qtdAcertos) { // variavel

    var instrucaoSql = `INSERT INTO resultado (idResultado, fkUsuario, qtdAcertos) VALUES ('${qtdAcertos}')`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirResultado
};