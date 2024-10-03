const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta da inteligencia artificial?"
        alternativa:[{
            texto:"Sim",
            afirmação:"Porque ela é incrivel"
            },
            {
                texto: "Não",
                afirmação:""
            }
        ]
    },
    {
        enunciado: "Você acha a inteligencia artificial eficiente?"
        alternativa:[{
            texto:"Sim",
            afirmação:"Ate demais, ela cria e responde as melhores coisas que nem nós pensamos"
            },
            {
                texto: "nao",
                afirmação:"Porque a partir de um momento ela vai começar a controlar os afazeres dos seres humanos"
            }
        ]
    },
    {
        enunciado: "Você é de humanas ou exatas?"
        alternativa: [{
            texto:"Exatas",
            afirmação:"me dou melhor com a matemática"
            },
            {
                texto:"humanas",
                afirmação:"sou melhor em linguagens"
            }
        ]
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
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventlistener("click", funcion(){
            posição++;
            mostraPergunta():
        });
        caixaAlternativa.appendChild(botaoAlternativas);
    }

}
mostraPergunta();