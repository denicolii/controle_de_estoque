function addProduct() {
    // Obter os valores dos campos
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;

    // Verificar se todos os campos estão preenchidos
    if (productName && productPrice && productDescription) {
        // Criar um objeto de produto
        const product = {
            name: productName,
            price: parseFloat(productPrice),
            description: productDescription,
        };

        // Adicionar o produto à lista
        addProductToList(product);

        // Limpar os campos do formulário
        clearForm();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function addProductToList(product) {
    const productList = document.getElementById('product-list');

    // Criar um elemento de produto
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    // Preencher o conteúdo do elemento de produto
    productElement.innerHTML = `
        <strong>${product.name}</strong> - R$${product.price.toFixed(2)}<br>
        ${product.description}
        <button onclick="removeProduct(this)">Remover</button>
    `;

    // Adicionar o elemento à lista
    productList.appendChild(productElement);
}

function removeProduct(button) {
    const productElement = button.parentNode;
    const productList = document.getElementById('product-list');

    // Remover o elemento da lista
    productList.removeChild(productElement);
}

function clearForm() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-description').value = '';
}