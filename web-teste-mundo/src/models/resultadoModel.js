var database = require("../database/config");

function inserirResultado(idUsuario, qtdAcertos) { // variavel definição

    console.log("ACESSEI O RESULTADO MODEL");

    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, qtdAcertos) VALUES ('${idUsuario}', '${qtdAcertos}'); 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirResultado(idUsuario) {

  var instrucaoSql = `SELECT * FROM resultado WHERE fkUsuario = ${idUsuario} ORDER BY idResultado DESC LIMIT 1`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
    inserirResultado,
    exibirResultado
};