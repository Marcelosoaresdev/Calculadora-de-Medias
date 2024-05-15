const form = document.getElementById ('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
// const notaMinima = parseFloat(prompt("Digite a nota mínima: "))
let numero = '';  // Definindo 'numero' globalmente para garantir acesso em outras funções
let linhas = '' /* Linhas comeca vazia */

document.addEventListener('DOMContentLoaded', function() {
    validaNum();  // Chama a função validaNum assim que a página carregar
});

function validaNum() {
    do {
        let input = prompt("Por favor, digite a nota mínima:");
        if (!isNaN(input) && input.trim() !== "") {  // Verifica se a entrada é um número e não está vazia
            numero = parseFloat(input);
            break;  // Sai do loop porque um número válido foi inserido
        } else {
            alert("Por favor, insira apenas números.");
        }
    } while (true);  // Loop contínuo até que um número válido seja inserido

    alert(`Você definiou a nota mínima de: ${numero}`);
}

form.addEventListener ('submit', function (e){
    e.preventDefault () /* Remove o comportamento de atualizar a pagina ao clicar em submit */
   
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
}) 

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById ('nome-atividade')
    const inputNotaAtividade = document.getElementById ('nota-atividade')

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A Atividade: ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value)) /* Transforma o valor que sair de inputNotaAtividade(String) em um tipo numérico e faz o push para dentro do array notas*/
    
        let linha = '<tr>'   // <tr> = Linha da tabela
        linha += `<td>${inputNomeAtividade.value}</td>`     // <td> = Coluna da Tabela
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= numero ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
    
        linhas += linha  /* E agora, Linhas tem o valor da tabela (<tr><td>) inserida */
    }
    
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas  /* E Linhas escreve na tela todo os dados, e volta valendo uma string vazia que faz com que o elemento nao possa ser redefinido, e sim, atribuido*/
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= numero ? spanAprovado : spanReprovado

}

function calculaMediaFinal () {
    let somaDasNotas = 0
    
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}