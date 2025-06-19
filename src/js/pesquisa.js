function pesquisar() {
            let pesquisaTermo = document.getElementById('pesquisa').value.toLowerCase();
            const produtos = document.querySelectorAll('.produto-card');
            produtos.forEach(produto => {
                const nome = produto.querySelector('.produto-nome').textContent.toLowerCase();
                const descricao = produto.querySelector('.produto-descricao').textContent.toLowerCase();
                if (nome.includes(pesquisaTermo) || descricao.includes(pesquisaTermo)) {
                    produto.style.display = 'block';
                } else {
                    produto.style.display = 'none';
                }
            });
        }

function filtrarProdutos(categoria) {
    const produtos = document.querySelectorAll('.produto-card');
    produtos.forEach(produto => {
        if (categoria === 'todos') {
            produto.style.display = 'block';
        } else {
            if (produto.classList.contains(categoria)) {
                produto.style.display = 'block';
            } else {
                produto.style.display = 'none';
            }
        }
    });
}