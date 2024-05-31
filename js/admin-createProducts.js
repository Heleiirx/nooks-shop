import { jsonInfo } from "./client-server.js";

const createCard = (item, price, img, id) => {
    const card = document.createElement("div");
    card.classList.add("products__card");
    const content = `
                    <div class="admin__icons--addProduct">
                        <a class="not-style" href="../nooks-shop/edit-product.html?id=${id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                        </a>
                        <button type="button" id="${id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="products__image-bg">
                        <img src="${img}" alt="" class="card__image">
                    </div>
                    <h1 class="card__title">${item}</h1>
                    <h2 class="card__price">${new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price)}</h2>
                    <a href="" class="not-style card__link">Ver producto</a>`;
    card.innerHTML = content;

    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        console.log(id);
        jsonInfo.deleteProduct(id).then( response => {
            alert ("El producto se eliminó exitosamente")
        }). catch( error => alert("Ocurrió un error"))
    });

    return card;
};


jsonInfo.products("Muebles").then(furnitures => {
    furnitures.forEach(furniture => {
        const newCard = createCard(furniture.item, furniture.price, furniture.img, furniture.id );
        document.querySelector("[data-furniture-cards]").appendChild(newCard);
    });
}).catch((error) => console.log(error));


jsonInfo.products("Ropa").then(clothes => {
    clothes.forEach(clothe => {
        const newCard = createCard(clothe.item, clothe.price, clothe.img, clothe.id);
        document.querySelector("[data-clothes-cards]").appendChild(newCard);
    });
}).catch((error) => console.log(error));


jsonInfo.products("Musica").then(songs => {
    songs.forEach(song => {
        const newCard = createCard(song.item, song.price, song.img, song.id);
        document.querySelector("[data-music-cards]").appendChild(newCard);
    });
}).catch((error) => console.log(error));






