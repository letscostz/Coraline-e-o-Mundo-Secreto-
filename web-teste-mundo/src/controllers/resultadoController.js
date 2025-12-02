var resultadoModel = require("../models/resultadoModel");

function inserirResultado(req, res) {
  console.log(`BODY: ${req.body}`)
  var idUsuario = req.body.idUsuario; 
  var qtdAcertos = req.body.acertosServer; 

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

function exibirResultado(req, res) {

  const limite_linhas = 5;
  var idUsuario = req.params.idUsuario; 

  console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    resultadoModel.exibirResultado(idUsuario, limite_linhas)
        .then((resultado) => {
          if (resultado.length > 0) {
            console.log('TESTE TESTE')
            res.status(200).json(resultado);
          } else {
            res.status(204).json(['teste']);
          }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao exibir o resultado: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function contarTentativas(req, res) { 

  console.log("ACESSEI O CONTAR TENTATIVAS");
  var idUsuario = req.params.idUsuario;

    resultadoModel.contarTentativas(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); 
            } else {
                res.status(204).send("Nenhum dado encontrado na contagem de tentativas!");
            }
        })
        .catch(function (erro) {
            res.status(500).json(erro); 
    });

}

function contarPorcentagem(req, res) {

  console.log("ACESSEI O CONTAR PORCENTAGEM");
  var idUsuario = req.params.idUsuario;
  const limite_linhas = 5;

    resultadoModel.contarPorcentagem(idUsuario, limite_linhas)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); 
            } else {
                res.status(204).send("Nenhum dado encontrado na contagem de porcentagem!");
            }
        })
        .catch(function (erro) {
            res.status(500).json(erro); 
    });

}

module.exports = {
    inserirResultado,
    exibirResultado,
    contarTentativas,
    contarPorcentagem
}