var database = require("../database/config");

function inserirResultado(idUsuario, qtdAcertos) { // variavel definição

    console.log("ACESSEI O RESULTADO MODEL");

    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, qtdAcertos) VALUES ('${idUsuario}', '${qtdAcertos}'); 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirResultado(idUsuario, limite_linhas) {

  var instrucaoSql = `SELECT * FROM resultado WHERE fkUsuario = ${idUsuario} ORDER BY idResultado DESC LIMIT ${limite_linhas}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);

}

function contarTentativas(idUsuario) {

    console.log("ACESSEI O CONTAR TENTATIVAS");

    var instrucaoSql = `
        SELECT COUNT(idResultado) FROM resultado WHERE fkUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function contarPorcentagem(idUsuario, limite_linhas) {

    console.log("ACESSEI O CONTAR PORCENTAGEM");

    var instrucaoSql = `
        SELECT ROUND(AVG(qtdAcertos) * 100 / 10, 2) FROM (SELECT qtdAcertos FROM resultado WHERE fkUsuario = ${idUsuario} ORDER BY idResultado DESC LIMIT ${limite_linhas}) as ultimos7; 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    inserirResultado,
    exibirResultado,
    contarTentativas,
    contarPorcentagem
};