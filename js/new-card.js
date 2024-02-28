import { jsonInfo } from "./client-server.js";


export const createCard = (item, price, img, id) => {
    const card = document.createElement("div");
    card.classList.add("products__card");
    const content = `<div class="products__image-bg">
                        <img src="${img}" alt="" class="card__image">
                    </div>
                    <h1 class="card__title">${item}</h1>
                    <h2 class="card__price">${new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price)}</h2>
                    <a href="../nooks-shop/detallesProducto.html?id=${id}" class="not-style card__link">Ver producto</a>`;
    card.innerHTML = content;

    return card;
};

if (screen.width < 769) {
    jsonInfo.productsSDisplay("Muebles").then(furnitures => {
        furnitures.forEach(furniture => {
            const newCard = createCard(furniture.item, furniture.price, furniture.img, furniture.id);
            document.querySelector("[data-furniture-cards]").appendChild(newCard);
        });
    }).catch((error) => console.log(error));
    
    jsonInfo.productsSDisplay("Ropa").then(clothes => {
        clothes.forEach(clothe => {
            const newCard = createCard(clothe.item, clothe.price, clothe.img, clothe.id);
            document.querySelector("[data-clothes-cards]").appendChild(newCard);
        });
    }).catch((error) => console.log(error));
      
    jsonInfo.productsSDisplay("Musica").then(songs => {
        songs.forEach(song => {
            const newCard = createCard(song.item, song.price, song.img, song.id);
            document.querySelector("[data-music-cards]").appendChild(newCard);
        });
    }).catch((error) => console.log(error));        

} else {
    jsonInfo.productsLDisplay("Muebles").then(furnitures => {
        furnitures.forEach(furniture => {
            const newCard = createCard(furniture.item, furniture.price, furniture.img, furniture.id);
            document.querySelector("[data-furniture-cards]").appendChild(newCard);
        });
    }).catch((error) => console.log(error));
    
    jsonInfo.productsLDisplay("Ropa").then(clothes => {
        clothes.forEach(clothe => {
            const newCard = createCard(clothe.item, clothe.price, clothe.img, clothe.id);
            document.querySelector("[data-clothes-cards]").appendChild(newCard);
        });
    }).catch((error) => console.log(error));
    
    jsonInfo.productsLDisplay("Musica").then(songs => {
        songs.forEach(song => {
            const newCard = createCard(song.item, song.price, song.img, song.id);
            document.querySelector("[data-music-cards]").appendChild(newCard);
        });
    }).catch((error) => console.log(error));        
} 

document.querySelector("[data-all-furniture]").addEventListener("click", () => {
    document.querySelector("[data-furniture-cards]").innerHTML = '';
    jsonInfo.products("Muebles").then(furnitures => {
        furnitures.forEach(furniture => {
            const newCard = createCard(furniture.item, furniture.price, furniture.img, furniture.id);
            document.querySelector("[data-furniture-cards]").appendChild(newCard);
        });
    }).catch((error) => console.log(error));
})

document.querySelector("[data-all-clothes]").addEventListener("click", () =>{
    document.querySelector("[data-clothes-cards]").innerHTML = '';
    jsonInfo.products("Ropa").then(clothes => {
        clothes.forEach(clothe => {
            const newCard = createCard(clothe.item, clothe.price, clothe.img, clothe.id);
            document.querySelector("[data-clothes-cards]").appendChild(newCard);
        });
    }).catch((error) => console.log(error));
})

document.querySelector("[data-all-music]").addEventListener("click", () =>{
    document.querySelector("[data-music-cards]").innerHTML = '';
    jsonInfo.products("Musica").then(songs => {
        songs.forEach(song => {
            const newCard = createCard(song.item, song.price, song.img, song.id);
            document.querySelector("[data-music-cards]").appendChild(newCard);
        });
    }).catch((error) => console.log(error));
})

