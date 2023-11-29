var medidaModel = require("../models/medidaModel");

function buscarMedidasEmTempoReal(req, res) {
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoReal().then(function (resultado) {
        res.json(resultado);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            res.json({
                Sim: resultado[0].Sim,
            })
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealDois(req, res) {
    console.log(`Recuperando medidas em tempo real 2`);
    medidaModel.buscarMedidasEmTempoRealDois().then(function (resultado) {
        res.json(resultado);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            res.json({
                Nao: resultado[0].Nao,
            })
        } else {
            res.status(204).send("Nenhum resultado encontrado! 2")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.2", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRuim(req, res) {
    console.log(`Recuperando medidas em tempo real ruim`);
    medidaModel.buscarRuim().then(function (resultado) {
        res.json(resultado);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            res.json({
                Ruim: resultado[0].Ruim,
            })
        } else {
            res.status(204).send("Nenhum resultado encontrado! Ruim")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.Ruim", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarOk(req, res) {
    console.log(`Recuperando medidas em tempo real Ok`);
    medidaModel.buscarOk().then(function (resultado) {
        res.json(resultado);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            res.json({
                Ok: resultado[0].Ok,
            })
        } else {
            res.status(204).send("Nenhum resultado encontrado! Ok")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.Ok", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarBom(req, res) {
    console.log(`Recuperando medidas em tempo real Bom`);
    medidaModel.buscarBom().then(function (resultado) {
        res.json(resultado);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            res.json({
                Bom: resultado[0].Bom,
            })
        } else {
            res.status(204).send("Nenhum resultado encontrado! Bom")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.Bom", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarSuperaExpectativas(req, res) {
    console.log(`Recuperando medidas em tempo real SuperaExpectativas`);
    medidaModel.buscarSuperaExpectativas().then(function (resultado) {
        res.json(resultado);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            res.json({
                SuperaExpectativas: resultado[0].SuperaExpectativas,
            })
        } else {
            res.status(204).send("Nenhum resultado encontrado! SuperaExpectativas")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.SuperaExpectativas", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarMuitoBom(req, res) {
    console.log(`Recuperando medidas em tempo real MuitoBom`);
    medidaModel.buscarMuitoBom().then(function (resultado) {
        res.json(resultado);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            res.json({
                MuitoBom: resultado[0].MuitoBom,
            })
        } else {
            res.status(204).send("Nenhum resultado encontrado! MuitoBom")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.MuitoBom", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarMedidasEmTempoReal,
    buscarMedidasEmTempoRealDois,
    buscarRuim,
    buscarOk,
    buscarBom,
    buscarMuitoBom,
    buscarSuperaExpectativas
    // buscarUltimasMedidas
}