import { jsonInfo } from "./client-server.js";

const getInfo = async() => {
    const url = new URL (window.location);
    const id = url.searchParams.get("id");
    console.log(`URL producto ::::> ${url}`);
    console.log(`ID producto ::::> ${id}`);

    const img = document.querySelector("[data-input-img]");
    const category = document.querySelector("[data-input-category]");
    const item = document.querySelector("[data-input-item]");
    const price = document.querySelector("[data-input-price]");
    const description = document.querySelector("[data-input-description]");

    if(id==null){
        alert("El id proporcionado está vacío")
    }

    try{
        const product = await jsonInfo.infoProduct(id);
        if(product.img && product.category && product.item && product.price && product.description){
            img.value = product.img;
            category.value = product.category;
            item.value = product.item;
            price.value = product.price;
            description.value = product.description;
        }else{
            throw new Error();
        }
    } catch(error){
        console.log(`Ocurrió un error ::::::> ${Error}`);
    }

};
getInfo();

document.querySelector("[data-form-editProduct]").addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL (window.location);
    const id = url.searchParams.get("id");

    console.log(`ID producto para enviar ::::> ${id}`);

    const img = document.querySelector("[data-input-img]").value;
    const category = document.querySelector("[data-input-category]").value;
    const item = document.querySelector("[data-input-item]").value;
    const price = document.querySelector("[data-input-price]").value;
    const description = document.querySelector("[data-input-description]").value;

    jsonInfo.updateProduct(id, img, category, item, price, description).then(() => {
        alert("El productoo se ha actualizado con éxito");
    })
})