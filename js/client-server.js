//---------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------Peticiones info de productos-------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
const products = (category) => fetch(`http://localhost:3000/product?category=${category}`).then(products => products.json());

const createProduct = (img, category, item, price, description) => {
    fetch(`http://localhost:3000/product`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({img, category, item, price, description, id: uuid.v4()})
    })
}

const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/product/${id}`, {
        method: "DELETE"
    }).then(response => response.json());

}

//---------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------Peticiones info de clientes-------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

const createClient = (clientName, email, password) => {
    return fetch(`http://localhost:3000/profile`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({clientName, email, password, id: uuid.v4()})
    })
}

const createAdmin = (clientName, email, password) => {
    return fetch(`http://localhost:3000/profile`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({clientName, email, password, id: uuid.v4(), admin: true})
    })
}

const clients = (email, password) => fetch(`http://localhost:3000/profile?email=${email}&password=${password}`).then(response => response.json())


export const jsonInfo = {
    products,
    createProduct,
    clients,
    createClient,
    createAdmin,
    deleteProduct
}