const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de cair de um helicóptero no meio de uma ilha aparentemente deserta. Apesar da queda, você sofreu apenas alguns ferimentos leves. Com uma mochila de suprimentos básicos, o que você faz primeiro?",
        alternativas: [
            {
                texto: "Procuro um lugar seguro para montar um abrigo.",
                afirmacao: "Você decide manter a calma e procura um local seguro para passar a noite."
            },
            {
                texto: "Começo a gritar por ajuda.",
                afirmacao: "Você começa a gritar desesperadamente, esperando que alguém possa ouvir seus pedidos de socorro."
            }
        ]
    },

    {
        enunciado: "O sol começa a desaparecer no horizonte. Você percebe que a noite está chegando e ainda não encontrou nenhum sinal de civilização. O que você decide fazer?",
        alternativas: [
            {
                texto: "Monto um abrigo antes que escureça.",
                afirmacao: "Você reúne galhos e folhas e começa a construir um abrigo improvisado para passar a noite."
            },
            {
                texto: "Exploro a ilha enquanto ainda está claro.",
                afirmacao: "Você decide explorar a ilha em busca de água, comida ou qualquer sinal de que não está sozinho."
            }
        ]
    },

    {
        enunciado: "A noite finalmente chega. A floresta, que antes parecia silenciosa, começa a produzir sons estranhos. Então você percebe algo assustador: várias árvores foram completamente destruídas, como se uma criatura enorme tivesse passado por ali.",
        alternativas: [
            {
                texto: "Me escondo entre as árvores derrubadas e fico em silêncio.",
                afirmacao: "Você se esconde entre as árvores destruídas e tenta não fazer nenhum barulho."
            },
            {
                texto: "Corro para longe dos sons o mais rápido possível.",
                afirmacao: "Você entra em pânico e começa a correr pela floresta, tentando ficar o mais longe possível daquela criatura."
            }
        ]
    },

    {
        enunciado: "De repente, todos os sons da floresta param. O silêncio toma conta da ilha. Então você escuta passos cada vez mais próximos. Alguma coisa está vindo em sua direção.",
        alternativas: [
            {
                texto: "Permaneço escondido e tento descobrir o que é.",
                afirmacao: "Você permanece imóvel e observa cuidadosamente enquanto os passos se aproximam."
            },
            {
                texto: "Pego o pequeno estilete da mochila e me preparo para enfrentar a criatura.",
                afirmacao: "Você segura o pequeno estilete com força e se prepara para enfrentar aquilo que está se aproximando."
            }
        ]
    },

    {
        enunciado: "Um cheiro horrível toma conta do ar. Você sente a presença de alguma coisa muito próxima. Seu coração dispara. Quando finalmente olha para trás, percebe que o inevitável está prestes a acontecer...",
        alternativas: [
            {
                texto: "Aceito que talvez meu destino já esteja definido.",
                afirmacao: "Você percebe que talvez não exista mais nenhuma saída e decide encarar o destino que está diante de você."
            },
            {
                texto: "Faço alguma coisa, mesmo que pareça impossível escapar.",
                afirmacao: "Mesmo sabendo que suas chances são pequenas, você decide lutar pela própria sobrevivência até o último instante."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacoes + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Independente das ações tomadas, por mais pensadas que fossem, o destino antes definido não iria mudar...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";
}

mostraPergunta();
