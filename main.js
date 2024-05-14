const form = document.getElementById ('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'

let linhas = '' /* Linhas comeca vazia */

form.addEventListener ('submit', function (e){
    e.preventDefault () /* Remove o comportamento de atualizar a pagina ao clicar em submit */
   
    adicionaLinha()
    atualizaTabela()
}) 

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById ('nome-atividade')
    const inputNotaAtividade = document.getElementById ('nota-atividade')

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