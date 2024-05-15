const form = document.getElementById ('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'
const atividades = []
const notas = []

let linhas = '' /* Linhas comeca vazia */

form.addEventListener ('submit', function (e){
    e.preventDefault () /* Remove o comportamento de atualizar a pagina ao clicar em submit */
   
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
}) 

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById ('nome-atividade')
    const inputNotaAtividade = document.getElementById ('nota-atividade')

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value)) /* Transforma o valor que sair de inputNotaAtividade(String) em um tipo numérico e faz o push para dentro do array notas*/

    let linha = '<tr>'   // <tr> = Linha da tabela
    linha += `<td>${inputNomeAtividade.value}</td>`     // <td> = Coluna da Tabela
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'

    linhas += linha  /* E agora, Linhas tem o valor da tabela (<tr><td>) inserida */

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas  /* E Linhas escreve na tela todo os dados, e volta valendo uma string vazia que faz com que o elemento nao possa ser redefinido, e sim, atribuido*/
}

function atualizaMediaFinal() {
    let somaDasNotas = 0
    
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    const media = somaDasNotas / notas.length

    console.log(somaDasNotas)
}