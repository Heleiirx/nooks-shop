import { jsonInfo } from "./client-server.js";





// Validacion
document.querySelector("[data-form-session]").addEventListener("submit", async(event) => {
    event.preventDefault();
    const email = document.querySelector("[data-form-email]").value;
    const password = document.querySelector("[data-form-password]").value;
    
    await jsonInfo.clients(email, password).then(clients => {
        
        if (clients.length != 0 && clients[0].admin==true) { //Si es admin
            window.location.href = "../admin-products.html"
        } else if (clients.length != 0) { // --------------  Si es usuario normal
            window.location.href = "../index.html"
        } else { // --------------------------------------- Si no existe el usuario
            alert ("Correo contraseña invalidos, por favor revisalos")
        }
    }).catch((error) => console.log(error))
});


