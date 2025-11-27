var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

//fazer uma rota para receber o dado e direcionar para uma função

router.post("/inserirResultado", function (req, res) {
    resultadoController.inserirResultado(req, res);
}) // inserir dados do quiz no banco de dados

router.get("/exibirResultado", function (req, res) {
    resultadoController.exibirResultado(req, res);
});

module.exports = router;