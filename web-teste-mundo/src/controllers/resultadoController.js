var resultadoModel = require("../models/resultadoModel");

function inserirResultado(req, res) {
    console.log(`BODY: ${req.body}`)
    var idUsuario = req.params.idUsuario; // req
    var qtdAcertos = req.body.acertosServer; // req

    if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    } else if (qtdAcertos == undefined) {
        res.status(400).send("qtdAcertos está undefined!");
    } else {

        resultadoModel.inserirResultado(idUsuario, qtdAcertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao inserir o resultado! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    inserirResultado
}