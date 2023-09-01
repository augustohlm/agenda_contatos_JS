const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
e.preventDefault();

adicionaContato();
atualizarAgenda();
atualizaQuantidade();
});

function adicionaContato(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`Nome: ${inputNomeContato.value} já existe!`);
        
    } else if (numeros.includes(parseFloat(inputNumeroContato.value))) {
        alert(`Número: ${inputNumeroContato.value} já existe!`);

    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value} </td>`;
        linha += `<td> ${inputNumeroContato.value} </td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';

}

function atualizarAgenda(){
    const bodyTabela = document.querySelector('tbody');
    bodyTabela.innerHTML = linhas;
}

function quantidadeContatos(){
    let somaContatos = 0;
    for (let i; i < numeros.length; i++){
        
        somaContatos += numeros[i];
    }
    return somaContatos = numeros.length;
}

function atualizaQuantidade(){
    const quantidadeContatosFinal = quantidadeContatos();
    document.getElementById('quantidade-salvo').innerHTML = quantidadeContatosFinal;
}
