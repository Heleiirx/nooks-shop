import {jsonInfo} from "./client-server.js"

// -------------------------------------------- New Admin ------------------------------------------
console.log(document.querySelector("[data-form-newAdmin]"))

document.querySelector("[data-form-newAdmin]").addEventListener("submit", (event) => {
    event.preventDefault();
    const clientName = document.querySelector("[data-form-adminName]").value;
    const email = document.querySelector("[data-form-adminEmail]").value;
    const password = document.querySelector("[data-form-adminPassword]").value;
    
    jsonInfo.createAdmin(clientName, email, password)
    .then(() => {
        alert("Registro completado")
    })
    .catch((error) => console.log(error))
});