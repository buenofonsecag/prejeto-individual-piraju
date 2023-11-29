var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// router.get("/ultimas", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

router.post("/tempo-real", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.post("/tempo-realDois", function (req, res) {
    medidaController.buscarMedidasEmTempoRealDois(req, res);
})

router.post("/Ruim", function (req, res) {
    medidaController.buscarRuim(req, res);
})
router.post("/Ok", function (req, res) {
    medidaController.buscarOk(req, res);
})
router.post("/Bom", function (req, res) {
    medidaController.buscarBom(req, res);
})
router.post("/MuitoBom", function (req, res) {
    medidaController.buscarMuitoBom(req, res);
})
router.post("/SuperaExpectativas", function (req, res) {
    medidaController.buscarSuperaExpectativas(req, res);
})

module.exports = router;