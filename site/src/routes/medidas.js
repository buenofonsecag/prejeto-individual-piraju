var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// router.get("/ultimas", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

router.post("/tempo-real", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.post("/tempo-real2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
})

module.exports = router;