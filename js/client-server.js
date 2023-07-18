
const products = (category) => fetch(`http://localhost:3000/product?category=${category}`).then(response => response.json());


export const jsonInfo = {
    products
}