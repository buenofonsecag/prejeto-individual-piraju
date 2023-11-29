var Sim = 0;
var Nao = 0;

var myPieChart; // Declare a variável fora das funções para que seja global

window.onload = function () {
    obterDadosGrafico();
    obterDadosGraficoDois();
    setTimeout(() => {
        criarGrafico(Sim, Nao);
    }, 1000);
};

function obterDadosGrafico() {
    fetch("/medidas/tempo-real", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    })
        .then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(json => {
                    console.log(`Dados recebidos (Sim): ${JSON.stringify(json)}`);
                     Sim = json[0].Sim;
                    // Agora que temos o valor "Sim", vamos verificar se o gráfico já foi criado
                    
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function obterDadosGraficoDois() {
    fetch("/medidas/tempo-realDois", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    })
        .then(function (resposta) {
            console.log(resposta);
            if (resposta.ok) {
                resposta.json().then(json => {
                    console.log(`Dados recebidos (Não): ${JSON.stringify(json)}`);
                     Nao = json[0].Nao;
                    // Agora que temos o valor "Não", vamos verificar se o gráfico já foi criado
                    
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API 2');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico 2: ${error.message}`);
        });
}

function criarGrafico(dSim, dNao) {
    const data1 = {
        labels: ['Sim', 'Não'],
        datasets: [{
            data: [dSim, dNao],
            backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
        }],
    };

    let grafico = document.getElementById('myPieChart').getContext('2d');
    myPieChart = new Chart(grafico, {
        type: 'pie',
        data: data1,
    });
}
