import { getProdutos } from "./read-com-get.js";
getProdutos();

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
            }
        })

        getProdutos();

});