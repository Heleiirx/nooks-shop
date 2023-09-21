//---------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------Peticiones info de productos-------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
const products = (category) => fetch(`https://api-nooks-shop.vercel.app/product?category=${category}`).then(products => products.json());

const productsLDisplay = (category) => fetch(`https://api-nooks-shop.vercel.app/product?category=${category}&_page=1&_limit=7`).then(products => products.json());

const productsSDisplay = (category) => fetch(`https://api-nooks-shop.vercel.app/product?category=${category}&_page=1&_limit=4`).then(products => products.json());


const infoProduct = (id) => fetch(`https://api-nooks-shop.vercel.app/product/${id}`).then((respuesta) => respuesta.json());

const createProduct = (img, category, item, price, description) => {
    fetch(`https://api-nooks-shop.vercel.app/product`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({img, category, item, price, description, id: uuid.v4()})
    })
}

const deleteProduct = (id) => {
    return fetch(`https://api-nooks-shop.vercel.app/product/${id}`, {
        method: "DELETE"
    }).then(response => response.json());

}

const updateProduct = ( id, img, category, item, price, description ) => {
    return fetch(`https://api-nooks-shop.vercel.app/product/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({img, category, item, price, description})
    }).then( respuesta => respuesta).catch(err => console.log(err));
}

const searchProduct = (product) => {
    return fetch(`https://api-nooks-shop.vercel.app/product?q=${product}`).then(products => products.json());
}

//---------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------Peticiones info de clientes-------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

const createClient = (clientName, email, password) => {
    return fetch(`https://api-nooks-shop.vercel.app/profile`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({clientName, email, password, id: uuid.v4()})
    })
}

const createAdmin = (clientName, email, password) => {
    return fetch(`https://api-nooks-shop.vercel.app/profile`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({clientName, email, password, id: uuid.v4(), admin: true})
    })
}

const clients = (email, password) => fetch(`https://api-nooks-shop.vercel.app/profile?email=${email}&password=${password}`).then(response => response.json())


export const jsonInfo = {
    products,
    createProduct,
    clients,
    createClient,
    createAdmin,
    deleteProduct,
    infoProduct,
    updateProduct,
    searchProduct,
    productsSDisplay,
    productsLDisplay
}