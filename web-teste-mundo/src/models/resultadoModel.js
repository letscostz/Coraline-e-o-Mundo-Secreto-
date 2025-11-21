var database = require("../database/config");

function inserirResultado(fkUsuario, qtdAcertos) { // variavel definição

    console.log("ACESSEI O RESULTADO MODEL");

    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, qtdAcertos) VALUES ('${fkUsuario}', '${qtdAcertos}'); 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirResultado
};