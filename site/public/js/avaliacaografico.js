   // Dados para o gráfico
    var Ruim = 0
    var Ok = 0
    var Bom = 0
    var MuitoBom = 0
    var SuperaExpectativas = 0

    var myBarAvaliacao; // Declare a variável fora das funções para que seja global

    window.onload = function () {
        buscarRuim();
        buscarOk();
        buscarBom();
        buscarMuitoBom();
        buscarSuperaExpectativas();
        setTimeout(() => {
            criarGrafico2(Ruim, Ok, Bom, MuitoBom, SuperaExpectativas)
        }, 1000);
    };

    function buscarRuim() {
        fetch("/medidas/Ruim", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then(function (resposta) {
                if (resposta.ok) {
                    resposta.json().then(json => {
                        console.log(`Dados recebidos (Ok): ${JSON.stringify(json)}`);
                        ruim = json[0].Ruim;
                        console.log(ruim)
                        // Agora que temos o valor "Ok", vamos verificar se o gráfico já foi criado
                        // if (!myBarAvaliacao) {
                        //     // Cria o gráfico apenas se ainda não existir
                        //     criarGrafico2(Ruim, 0, 0, 0, 0);
                        // } else {
                        //     // Atualiza o gráfico com o valor de "Ruim"
                        //     atualizarGrafico2(Ruim, 0, 0, 0, 0);
                        // }
                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API ok');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }


    function buscarOk() {
        fetch("/medidas/Ok", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then(function (resposta) {
                if (resposta.ok) {
                    resposta.json().then(json => {
                        console.log(`Dados recebidos (Ok): ${JSON.stringify(json)}`);
                        Ok = json[0].Ok;
                        // Agora que temos o valor "Ok", vamos verificar se o gráfico já foi criado
                        // if (!myBarAvaliacao) {
                        //     // Cria o gráfico apenas se ainda não existir
                        //     criarGrafico2(0, Ok, 0, 0, 0);
                        // } else {
                        //     // Atualiza o gráfico com o valor de "Ok"
                        //     atualizarGrafico2(0, Ok, 0, 0, 0);
                        // }
                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API ok');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }

    function buscarBom() {
        fetch("/medidas/Bom", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then(function (resposta) {
                if (resposta.ok) {
                    resposta.json().then(json => {
                        console.log(`Dados recebidos (Bom): ${JSON.stringify(json)}`);
                        Bom = json[0].Bom;
                        // Agora que temos o valor "Bom", vamos verificar se o gráfico já foi criado
                        // if (!myBarAvaliacao) {
                        //     // Cria o gráfico apenas se ainda não existir
                        //     criarGrafico2(0, 0, Bom, 0, 0);
                        // } else {
                        //     // Atualiza o gráfico com o valor de "Bom"
                        //     atualizarGrafico2(0, 0, Bom, 0, 0);
                        // }
                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API Bom');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }
    function buscarMuitoBom() {
        fetch("/medidas/MuitoBom", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then(function (resposta) {
                if (resposta.ok) {
                    resposta.json().then(json => {
                        console.log(`Dados recebidos (MuitoBom): ${JSON.stringify(json)}`);
                        MuitoBom = json[0].MuitoBom;
                        // Agora que temos o valor "MuitoBom", vamos verificar se o gráfico já foi criado
                        // if (!myBarAvaliacao) {
                        //     // Cria o gráfico apenas se ainda não existir
                        //     criarGrafico2(0, 0, 0,MuitoBom, 0);
                        // } else {
                        //     // Atualiza o gráfico com o valor de "MuitoBom"
                        //     atualizarGrafico2(0, 0, 0,MuitoBom, 0);
                        // }
                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API MuitoBom');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }
    function buscarSuperaExpectativas() {
        fetch("/medidas/SuperaExpectativas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then(function (resposta) {
                if (resposta.ok) {
                    resposta.json().then(json => {
                        console.log(`Dados recebidos (SuperaExpectativas): ${JSON.stringify(json)}`);
                        SuperaExpectativas = json[0].SuperaExpectativas;
                        // Agora que temos o valor "SuperaExpectativas", vamos verificar se o gráfico já foi criado
                        // if (!myBarAvaliacao) {
                        //     // Cria o gráfico apenas se ainda não existir
                        //     criarGrafico2(0, 0, 0,0,SuperaExpectativas);
                        // } else {
                        //     // Atualiza o gráfico com o valor de "SuperaExpectativas"
                        //     atualizarGrafico2(0, 0, 0,0,SuperaExpectativas);
                        // }
                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API SuperaExpectativas');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }

    function criarGrafico2(dRuim,dOk,dBom,dMuitoBom,dSupera) {
        const data = {
            labels: ['Ruim', 'Ok', 'Bom', 'Muito Bom', 'Superou as Expectativas'],
            datasets: [{
                data: [dRuim,dOk,dBom,dMuitoBom,dSupera],
                backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
            }],
        };

        let ctx = document.getElementById('myBarAvaliacao').getContext('2d');
        myBarAvaliacao = new Chart(ctx, {
            type: 'bar',
            data: data,
        });
    }

    function atualizarGrafico2(Ruim, Ok, Bom, MuitoBom, SuperaExpectativas) {
        myBarAvaliacao.data.datasets[0].data = [Ruim, Ok, Bom, MuitoBom, SuperaExpectativas];
        myBarAvaliacao.update();
    }
