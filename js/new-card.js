import { jsonInfo } from "./client-server.js";


const createCard = (item, price, img) => {
    const card = document.createElement("div");
    card.classList.add("products__card");
    const content = `<div class="products__image-bg">
                        <img src="${img}" alt="" class="card__image">
                    </div>
                    <h1 class="card__title">${item}</h1>
                    <h2 class="card__price">${new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price)}</h2>
                    <a href="" class="not-style card__link">Ver producto</a>`;
    card.innerHTML = content;

    return card;
};


jsonInfo.products("Muebles").then(furnitures => {
    furnitures.forEach(furniture => {
        const newCard = createCard(furniture.item, furniture.price, furniture.img);
        document.querySelector("[data-furniture-cards]").appendChild(newCard);
    });
}).catch((error) => console.log(error));


jsonInfo.products("Ropa").then(clothes => {
    clothes.forEach(clothe => {
        const newCard = createCard(clothe.item, clothe.price, clothe.img);
        document.querySelector("[data-clothes-cards]").appendChild(newCard);
    });
}).catch((error) => console.log(error));


jsonInfo.products("Musica").then(songs => {
    songs.forEach(song => {
        const newCard = createCard(song.item, song.price, song.img);
        document.querySelector("[data-music-cards]").appendChild(newCard);
    });
}).catch((error) => console.log(error));