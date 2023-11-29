var database = require("../database/config");

function buscarMedidasEmTempoReal() {

   var instrucao = ' select count(visitou_piraju) as Sim from visita where visitou_piraju = "Sim" '

        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMedidasEmTempoRealDois() {
   var instrucao = 'select count(visitou_piraju) from visita as Nao where visitou_piraju = "Nao" '
   
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucao);
}


module.exports = {
    buscarMedidasEmTempoReal,
    buscarMedidasEmTempoRealDois
}
