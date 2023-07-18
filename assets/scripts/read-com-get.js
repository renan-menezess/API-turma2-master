function getProdutos(btnDelete = false) {

    fetch('http://localhost:3000/produtos/', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {

            const listaProdutos = document.querySelector('#listaProdutos');
            listaProdutos.innerHTML = "Lista de Produtos";
            listaProdutos.classList.add('lista-produtos');

            for (let i = 0; i < resposta.length; i++) {

                const ul = document.createElement('ul');
                ul.classList.add('produto');
                ul.id = `produto-${resposta[i].id}`;
                ul.tabIndex = resposta[i].id;

                const img = document.createElement('img');
                img.setAttribute('src', `./assets/imagem/${resposta[i].imagem}`);
                img.setAttribute('height', '40');
                img.setAttribute('data-produto', 'imagem');

                const liId = document.createElement('li');
                liId.classList.add('lista-de-produtos');
                liId.innerHTML = resposta[i].id;
                liId.setAttribute('data-produto', 'id');
                
                const liDescricao = document.createElement('li');
                liDescricao.classList.add('lista-de-produtos');
                liDescricao.innerHTML = resposta[i].descricao;
                liDescricao.setAttribute('data-produto', 'descricao');
                
                const liPreco = document.createElement('li');
                liPreco.classList.add('lista-de-produtos');
                liPreco.innerHTML = resposta[i].preco;
                liPreco.setAttribute('data-produto', 'preco');
                
                const liImg = document.createElement('li');
                liImg.classList.add('lista-de-produtos');
                liImg.appendChild(img);
                
                ul.append(liImg, liId, liDescricao, liPreco);
                
                // Início do código do botão
                if (btnDelete) {

                    const liBotao = document.createElement('li');
    
                    const botao = document.createElement('button');
                    botao.type = 'button';
                    botao.innerHTML = '❌';
                    botao.classList.add('botao-delete');
                    botao.value = resposta[i].id;
    
                    ul.appendChild(liBotao).appendChild(botao);
                }
                // Fim do código do botão

                listaProdutos.appendChild(ul);
            }

        });
}

export { getProdutos };