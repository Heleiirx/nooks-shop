import { jsonInfo } from "./client-server.js";

//------------------------------------ New Client -------------------------------------------
document.querySelector("[data-form-registrer]").addEventListener("submit", (event) => {
    event.preventDefault();
    const clientName = document.querySelector("[data-form-name]").value;
    const email = document.querySelector("[data-form-email]").value;
    const password = document.querySelector("[data-form-password]").value;
    
    jsonInfo.createClient(clientName, email, password).then(() => {
        alert("Registro completado")
    }).catch((error) => console.log(error))
});

