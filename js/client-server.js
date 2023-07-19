
const products = (category) => fetch(`http://localhost:3000/product?category=${category}`).then(response => response.json());

const createProduct = (img, category, item, price, description) => {
    fetch(`http://localhost:3000/product`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({img, category, item, price, description, id: uuid.v4()})
    })
}


export const jsonInfo = {
    products,
    createProduct
}