import { jsonInfo } from "./client-server.js";
import{ createCard } from "./new-card.js";

const searchForm = document.querySelector("[data-button-search]");
console.log(searchForm)

searchForm.addEventListener("click", (event) => {
    document.querySelector("[data-products]").innerHTML = '';
    document.querySelector("[data-products]").innerHTML = `
    <section class="products__section furniture">
        <div class="section-top" data-title-products>
            <h1 class="products__title">Resultados</h1>
        </div>
        <div class="section-bottom" data-furniture-cards></div>
    </section>`;
    console.log("Entro a funcion");
    event.preventDefault();
    const product =  document.querySelector("[data-input-search]").value;

    jsonInfo.searchProduct(product).then((data) => data.forEach(data => {
        const newCard = createCard(data.item, data.price, data.img);
        document.querySelector("[data-furniture-cards]").appendChild(newCard);
    }))
    .catch(error => console.log("Ocurrio un error"))
})

console.log()


