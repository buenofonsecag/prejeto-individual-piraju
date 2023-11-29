var database = require("../database/config");

function buscarMedidasEmTempoReal() {

   var instrucao = ' select count(visitou_piraju) as Sim from visita where visitou_piraju = "Sim" '

        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMedidasEmTempoRealDois() {
   var instrucaoSql11 = 'select count(visitou_piraju) as Nao from visita where visitou_piraju = "Nao" '
   
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    console.log("Executando a instrução SQL: \n" + instrucaoSql11);
    return database.executar(instrucaoSql11);
}

function buscarRuim() {
   var instrucaoSql0 = 'select count(descricao) as Ruim from avaliacao where descricao = "Ruim" '
   
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    console.log("Executando a instrução SQL: \n" + instrucaoSql0);
    return database.executar(instrucaoSql0);
}

function buscarOk() {
   var instrucaoSql1 = 'select count(descricao) as Ok from avaliacao where descricao = "Ok" '
   
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    console.log("Executando a instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1);
}

function buscarBom() {
   var instrucaoSql2 = 'select count(descricao) as Bom from avaliacao where descricao = "Bom" '
   
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}
function buscarMuitoBom() {
   var instrucaoSql3 = 'select count(descricao) as MuitoBom from avaliacao where descricao = "Muito Bom" '
   
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    console.log("Executando a instrução SQL: \n" + instrucaoSql3);
    return database.executar(instrucaoSql3);
}
function buscarSuperaExpectativas() {
   var instrucaoSql4 = 'select count(descricao) as SuperaExpectativas from avaliacao where descricao = "Superou as Expectativas" '
   
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    console.log("Executando a instrução SQL: \n" + instrucaoSql4);
    return database.executar(instrucaoSql4);
}


module.exports = {
    buscarMedidasEmTempoReal,
    buscarMedidasEmTempoRealDois,
    buscarRuim,
    buscarOk,
    buscarBom,
    buscarMuitoBom,
    buscarSuperaExpectativas
}
