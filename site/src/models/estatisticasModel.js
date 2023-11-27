var database = require("../database/config");

function buscar(nota) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscar(): ", titulo, descricao, idUsuario, nota);
    var instrucao = `
        SELECT (nota) FROM aviso WHERE fk_turistico = 1; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    buscar
}