const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Pergunta 1",
        alternativas:["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado:"Pergunta 2",
        alternativas:["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado:"Pergunta 3",
        alternativas:["Alternativa 1","Alternativa 2"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao].enunciado
    caixaPergunta.textContent = perguntaAtual.enunciado
        mostraalternativas();
}
    function mostraalternativas(){
        for (const alternativa of perguntaAtual.alternativa){
            const botaoalternativa = document.createElement("button");
            botaoalternativa.textContent = alternativa;
            caixaAlternativa.appendChild(botaoalternativas);

}
mostraPergunta();
    }