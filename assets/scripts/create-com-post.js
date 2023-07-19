import { getProdutos } from "./read-com-get.js";

document.querySelector('#btnCadastrar').addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value,
        'imagem': document.querySelector('#imagem').value
    };

    fetch(`http://localhost:3000/produtos/`, {
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

function getProdutos() {
    fetch('http://localhost:3000/produtos', {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
})

    .then(resposta => resposta.json())
    .then(resposta => {

        document.querySelector('#listaProdutos').innerHTML = "";

        for(let i = 0; i < resposta.length; i++) {

            const ul = document.createElement("ul");
            const img = document.createElement('img');
            img.setAttribute('height', '50');

            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;
            ul.appendChild(document.createElement('li')).appendChild(img).setAttribute('src', resposta[i].imagem);

            document.querySelector('#listaProdutos').appendChild(ul);

        }
    });
}

getProdutos();