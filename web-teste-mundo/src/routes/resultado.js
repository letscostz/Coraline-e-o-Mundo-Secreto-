var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

//fazer uma rota para receber o dado e direcionar para uma função

router.post("/inserirResultado", function (req, res) {
    resultadoController.inserirResultado(req, res);
}) // inserir dados do quiz no banco de dados

router.get("/exibirResultado/:idUsuario", function (req, res) {
    resultadoController.exibirResultado(req, res);
}); // exibir os resultados na dashboard

router.get("/contarTentativas/:idUsuario", function (req, res) {
    resultadoController.contarTentativas(req, res);
}); // contar a quantidade de tentativas do usuario

router.get("/contarPorcentagem/:idUsuario", function (req, res) {
    resultadoController.contarPorcentagem(req, res);
}); // contar a porcentagem de acertos nas ultimas tentativas

module.exports = router;