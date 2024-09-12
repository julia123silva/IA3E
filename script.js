const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const pergunta = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta da inteligencia artificial?"
        alternativa:["Sim", "Não"]
    },
    {
        enunciado: "Você pratica exercícios fisicos?"
        alternativa: ["Sim", "Não"]
    },
    {
        enunciado: "você é de humanas ou exatas?"
        alternativa: ["Exatas", "Humanas"]
    }

]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao].enunciado;
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for
}