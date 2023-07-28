import { jsonInfo } from "./client-server.js";

const detailsCard = (img, title, price, description) =>{
    const card = document.createElement("div");
    card.classList.add("productDetails")
    const content = 
    `<div class="productDetails__left">
        <img src="${img}" alt="" class="productDetails__img">
    </div>
    <div class="productDetails__right">
        <h1 class="productDetails__title">${title}</h1>
        <h2 class="productDetails__price">${price}</h2>
        <p class="productDetails__description">${description}</p>
    </div>`;

    card.innerHTML = content;

    return card;
                
};

const getInfo = async() => {
    const url = new URL (window.location);
    const id = url.searchParams.get("id");
    console.log(`URL producto ::::> ${url}`);
    console.log(`ID producto ::::> ${id}`);

    if(id==null){
        alert("El id proporcionado está vacío")
    }
    // jsonInfo.infoProduct(id).then(data => console.log(data))
    try {
       const product = await jsonInfo.infoProduct(id)
            const details =  detailsCard(product.img, product.item, product.price, product.description);
            document.querySelector("[data-main]").appendChild(details);
    } catch(error){
        console.log(`Ocurrió un error ::::::> ${Error}`);
    }
};
getInfo();
