import { getProdutos } from "./read-com-get.js";

getProdutos();

document.querySelector('#listaProdutos').addEventListener('click', event => {

    if (event.target.closest('ul').classList.contains('produto')) {

        const elementoBase = event.target.closest('ul');

        document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="id"]').innerHTML;

        document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto="descricao"]').innerHTML;

        document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto="preco"]').innerHTML;

        document.querySelector('input#imagem').value = elementoBase.querySelector('[data-produto="imagem"]').getAttribute('src').split("images/").pop();

        checaInputs(); 
    }
});

function checaInputs() {

    const idPreenchido = document.querySelector('input#id').value !== "";
    const descricaoPreenchida = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";
    const imagemPreenchida = document.querySelector('input#imagem').value !== "";

    if (descricaoPreenchida || precoPreenchido || imagemPreenchida || idPreenchido) {
        document.querySelector('button#btnCancelar').removeAttribute('disabled');        
    } else {
        document.querySelector('button#btnCancelar').setAttribute('disabled', '');
    }
    
    if (idPreenchido) {
        document.querySelector('button#btnAtualizar').removeAttribute('disabled');
    } else {
        document.querySelector('button#btnAtualizar').setAttribute('disabled', '');
    }
}

document.querySelector('form').addEventListener('reset', () => {
    document.querySelector('#btnCancelar').setAttribute('disabled', '');
    document.querySelector('#btnAtualizar').setAttribute('disabled', '');
});

document.addEventListener('input', checaInputs);

document.querySelector('#btnAtualizar').addEventListener('click', () => {

    const id = document.querySelector('#id').value;

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value,
        'imagem': document.querySelector('#imagem').value
    };

    fetch(`https://json-server-vercel-test-l0knvbzfa-renan-menezess.vercel.app/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (response.ok) {
                document.querySelector('#resposta').innerHTML = 'Produto atualizado!';
                getProdutos();
            } else {
                location.reload();
            }
        })


});