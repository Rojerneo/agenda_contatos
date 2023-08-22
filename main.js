const formCadastro = document.querySelector('#form-cadastro');
const inputNomeContato = document.querySelector('#cadastro-nome');
const inputNumTelefone = document.querySelector('#cadastro-telefone');
let linhas = '';
let totalContatos = [];

formCadastro.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinhaTabela();
    atualizaTabela();
    atualizaTotalContatos();
})

function validaTelefone() {
    if(inputNumTelefone.value.length < 11) {
        alert('O número do telefone deve conter 11 dígitos incluindo o DDD.');
    }
}

function addLinhaTabela() {

    if (totalContatos.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já está cadastrado.`)
    } else if (inputNumTelefone.value.length < 11) {
        alert('O número do telefone deve conter 11 dígitos incluindo o DDD.');
    } else {
        totalContatos.push(inputNomeContato.value);

        let linha = '<tr>';
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputNumTelefone.value}</td>`;
            linha += '</tr>'

        linhas += linha;
        };

    inputNomeContato.value = '';
    inputNumTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotalContatos() {
    const somaContatos = document.querySelector('#soma-contatos');
    somaContatos.innerHTML = totalContatos.length
}