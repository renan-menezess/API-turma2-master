import { getProdutos } from "./read-com-get.js";

getProdutos();

// Desafio 2
function checaInputs() {

    const descricaoPreenchida = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";
    const imagemPreenchida = document.querySelector('input#imagem').value !== "";

    if (descricaoPreenchida || precoPreenchido || imagemPreenchida) {
        document.querySelector('button#btnCancelar').removeAttribute('disabled');
        document.querySelector('button#btnCadastrar').removeAttribute('disabled');
    } else {
        document.querySelector('button#btnCancelar').setAttribute('disabled', '');
        document.querySelector('button#btnCadastrar').setAttribute('disabled', '');
    }
}

// Complemento desafio 2
document.querySelector('form').addEventListener('reset', () => {
    document.querySelector('#btnCancelar').setAttribute('disabled', '');
    document.querySelector('#btnCadastrar').setAttribute('disabled', '');
});

//Complemento desafio 3
document.addEventListener('input', () => {
    checaInputs();
});

document.querySelector('#btnCadastrar').addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value,
        'imagem': document.querySelector('#imagem').value
    };

    fetch(`https://json-server-vercel-test-l0knvbzfa-renan-menezess.vercel.app/produtos`, {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (response.ok) {
                document.querySelector('#resposta').innerHTML = 'Produto Cadastrado!';
                getProdutos();
            } else {
                location.reload();
            }
        })

        

});