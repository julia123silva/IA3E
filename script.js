const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você acredita que a telemedicina é uma opção viável para as consultas médicas?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A telemedicina facilita o acesso e cuidados médicos."}, 

            {texto: "Não",
            afirmação:"Sinto que a telemedicina não é eficiente, especialmente para exames físicos ou algo mais complexo."}]
    },
    { 
        enunciado: "Você se sentia confortável compartilhando suas informações em uma plataforma de telemedicina?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Confio que essas plataformas possuem medidades de segurança."}, 
                
            {texto: "Não",
            afirmação:"Tenho preocupações sobre a privacidade."}]
    },
    { 
        enunciado: "Você usaria a telemedicina para tratamentos de doenças crônicas?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Acho as consultas online convenientes e tenho um acesso mais frequente para acompanhar meus problemas."}, 
                
            {texto: "Não",
            afirmação:"Prefiro atendimento presencial para ser algo mais detalhado."}]
    },
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
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
