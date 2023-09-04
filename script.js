function getById(id) {
    return document.getElementById(id);
}


const displayProduct = (product, quantity) => {
    const ul = getById("product-container");
    const li = document.createElement("li");
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}


const displayFromLocalStorage = (products) => {
    for (const p in products) {
        displayProduct(p, products[p]);
    }
}

const cart = localStorage.getItem("cart");
let products = {};
if (cart) {
    products = JSON.parse(cart);
    displayFromLocalStorage(products);
}


const saveToLocalStorage = (product, quantity) => {
    products[product] = quantity;
    localStorage.setItem("cart", JSON.stringify(products))
}


getById("btn").addEventListener("click", () => {
    const product = getById("product").value;
    const quantity = getById("quantity").value;
    getById("product").value = "";
    getById("quantity").value = "";

    displayProduct(product, quantity);
    saveToLocalStorage(product, quantity);
})
