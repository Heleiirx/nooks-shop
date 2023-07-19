import { jsonInfo } from "./client-server.js";

const form = document.querySelector("[data-form-addProduct]");
console.log(form);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const img = document.querySelector("[data-input-img]").value;
    const category = document.querySelector("[data-input-category]").value;
    const item = document.querySelector("[data-input-item]").value;
    const price = document.querySelector("[data-input-price]").value;
    const description = document.querySelector("[data-input-description]").value;

    console.log(img, category, item, price, description)
    jsonInfo.createProduct(img, category, item, price, description)
    .then((response) => {
        alert("Registro completado")
    })
    .catch((error) => console.log(error))
});