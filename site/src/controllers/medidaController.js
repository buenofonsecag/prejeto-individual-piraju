var medidaModel = require("../models/medidaModel");
// var medidaModel2 = require("../models/medidaModel");

// function buscarUltimasMedidas(req, res) {

//     // const limite_linhas = 7;

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

//     medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }


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

module.exports = {
    buscarMedidasEmTempoReal,
    buscarMedidasEmTempoRealDois
    // buscarUltimasMedidas
}