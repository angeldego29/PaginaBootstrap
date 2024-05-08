// Datos de ejemplo de productos
const products = [
    { name: "Camisa de Hombre 1", price: 600, image: "POLO1.2.jpeg" },
    { name: "Camisa de Hombre 2", price: 700, image: "POLO1.jpeg" },
    { name: "Camisa de Hombre 3", price: 800, image: "POLO2.jpeg" },
    { name: "Camisa de Hombre 4", price: 900, image: "POLO3.jpeg" },
    { name: "Camisa de Hombre 5", price: 600, image: "POLO4.jpeg" },
    { name: "Camisa de Hombre 6", price: 700, image: "POLO5.jpeg" },
    { name: "Camisa de Hombre 7", price: 800, image: "POLO6.jpeg" },
    { name: "Camisa de Hombre 8", price: 900, image: "POLO7.jpeg" },
    { name: "Camisa de Hombre 9", price: 600, image: "POLO8.jpeg" },
    { name: "Camisa de Hombre 10", price: 700, image: "POLO9.jpeg" },
    { name: "Pantalon hombre 1", price: 800, image: "POLO10.jpeg" },
    { name: "Pantalon hombre 2", price: 900, image: "POLO11.jpeg" },
    { name: "Pantalon hombre 3", price: 600, image: "POLO12.jpeg" },
    { name: "Pantalon hombre 4", price: 700, image: "POLO13.jpeg" },
    { name: "Pantalon hombre 5", price: 800, image: "POLO14.jpeg" },
    { name: "Pantalon hombre 6", price: 900, image: "POLO15.jpeg" },
    { name: "Gorra 1", price: 900, image: "GORRA1.jpeg" },
    { name: "Gorra 2", price: 600, image: "GORRA2.jpeg" },
    { name: "Gorra 3", price: 700, image: "GORRA3.jpeg" },
    { name: "Gorra 4", price: 800, image: "GORRA4.jpeg" },
    { name: "Gorra 5", price: 900, image: "GORRA5.jpeg" },
];


// Array para almacenar los precios de los productos agregados al carrito
let cart = [];

// Función para generar las tarjetas de productos
function generateProductCards() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.price})">Agregar al Carrito</button>
                </div>
            </div>
        `;

        productList.appendChild(card);
    });
}

// Función para agregar un producto al carrito
function addToCart(price) {
    cart.push(price);
    updateCartSummary();
}

// Función para actualizar el resumen del carrito
function updateCartSummary() {
    const subtotal = cart.reduce((total, price) => total + price, 0);
    const tax = subtotal * 0.16; // IVA del 16%
    const totalAmount = subtotal + tax;

    document.getElementById('subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `IVA (16%): $${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `Total: $${totalAmount.toFixed(2)}`;
}

// Llama a la función para generar las tarjetas de productos cuando la página se carga
document.addEventListener('DOMContentLoaded', generateProductCards);

