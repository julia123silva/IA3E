const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Me ajuda no cotidiano"
        },
        {
            texto: "Não",
            afirmação: "Ela só veio para nos controlar"
        }
        ]
    },
    {
        enunciado: "Você acha a Inteligencia artificial eficiente?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Muito, ela me ajuda com perguntas e resposta que eu nem imaginava"
        },
        {
            texto:"Não",
            afirmação:"Acho eficiente mas, isso esta acabando com a humanidade e a inteligência humana"
        }
        ]
    },
    {
        enunciado: "Você é de humanas ou exatas?",
        alternativas: [{
            texto: "Humanas",
            afirmação: "Humanas, dou melhor com linguagens"
        },
        {
            texto: "Exatas",
            afirmação: "Exatas, dou melhor com matemática"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  ()=> RespostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function RespostasSelecionadas(opcaoSelecionada){ 
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas = afirmacoes
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Daqui 10 anos ou ate menos a Inteligência Artificial dominará o mundo e todos!";
}
mostraPergunta();
