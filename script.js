const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de cair de um helicóptero no meio de uma ilha deserta, apenas com uma mochila de suprimentos básicos",
        alternativas: [
            {
                texto: "aaaahhhhhhhhhhhhhh",
                afirmacao: "afirmacao"
            },
            {
                texto: "yeeeeeeaaaaaaaahhhh",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "Após a queda, voce fica com apenas ferimentos leves, então...",
        alternativas: [
            {
                texto:"procuro abrigo",
                afirmacao:"afirmacao"
            },
            {
                texto: "Grito desesperadamente",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Na caìda da noite, você percebe que a ilha não é tão deserta quanto parecia e começa a ouvir sons nunca antes registrados na mata",
        alternativas: [
            {
                texto:"Me escondo em um monte de arvores que foram derrubadas por uma criatura",
                afirmacao:"afirmacao"
            },
            {
                texto:"Tento correr para longe do barulho, chamando muita atenção por burrice",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "De repente o barrulho para e o sons de passos se tornam cada vez maior",
        alternativas: [
            {
                texto:"Tento localizar a criatura",
                afirmacao:"afirmacao"
            },
            {
                texto:"Pego um pequeno estilete em minha mochila e me preparo para enfrentar o desconhecido",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Voce seente um cheiro insuportavel e quando",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();