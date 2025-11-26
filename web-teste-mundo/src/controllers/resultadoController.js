var resultadoModel = require("../models/resultadoModel");

function inserirResultado(req, res) {
    console.log(`BODY: ${req.body}`)
    var idUsuario = req.body.idUsuario; // req
    var qtdAcertos = req.body.acertosServer; // req

    if (idUsuario == undefined) {
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

function capturarId(req, res) {

  var resultado = 
}

function exibirResultado(req, res) {

  const limite_linhas = 7;

  var idUsuario = req.body.idUsuario; // body ou params

  console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  resultadoModel.exibirResultado(idUsuario, limite_linhas).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao exibir o resultado: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


module.exports = {
    inserirResultado,
    exibirResultado
}