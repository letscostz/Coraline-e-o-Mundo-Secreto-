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

    var contarTentativas = `
        SELECT COUNT(idResultado) as tentativas FROM resultado WHERE fkUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + contarTentativas);
    return database.executar(contarTentativas);

}

function contarPorcentagem(idUsuario, limite_linhas) {

    console.log("ACESSEI O CONTAR PORCENTAGEM");

    var contarPorcentagem = `
        SELECT ROUND(AVG(qtdAcertos) * 100 / 10, 2) as porcentagem FROM (SELECT qtdAcertos FROM resultado WHERE fkUsuario = ${idUsuario} ORDER BY idResultado DESC LIMIT ${limite_linhas}) as ultimos5; 
    `;

    console.log("Executando a instrução SQL: \n" + contarPorcentagem);
    return database.executar(contarPorcentagem);

}

module.exports = {
    inserirResultado,
    exibirResultado,
    contarTentativas,
    contarPorcentagem
};