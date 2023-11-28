var avisoModel = require("../models/avisoModel");

function listar(req, res) {
    var fkPontoTuristico = req.params.fkPontoTuristico;

    if (fkPontoTuristico == undefined) {
        res.status(400).send('fkPonto está undefined!');
    }

    avisoModel.listar(fkPontoTuristico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            res.json({
                media: resultado[0].media
            });
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avisoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function publicar(req, res) {
    var titulo = req.body.titulo;
    // var turisticos = req.body.turisticos;
    var descricao = req.body.descricao;
    var nota = req.body.nota;
    var idUsuario = req.params.idUsuario;
    // selectedStars

    avisoModel.publicar(titulo, descricao, idUsuario, nota)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    listarPorUsuario,
    publicar
}