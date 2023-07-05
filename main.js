// Funcion que carga header y footer en todas las paginas
$(function(){
    $('#header').load('html/header.html', function (){
        console.log("Cargó header");
    });
    
    $('#footer').load('html/footer.html', function(){
        console.log("Cargó footer");
    });
});

//Busqueda y validacion de inputs
// const inputs = document.querySelectorAll("input");

// inputs.forEach(input =>{
//     input.addEventListener("blur", (input) => {
//         valida(input.target);
//     })
// })

// function valida(input){
//     const tipoDeInput = input.dataset.tipo;
//     if(validadores[tipoDeInput]){
//         validadores[tipoDeInput](input);
//     }
    
//     if (input.validity.valid){
//         input.classList.remove("input--invalid");
//         input.querySelector(".input-message--error").innerHTML = "";
//     }else{
//         input.classList.add("input--invalid");
//         input.querySelector(".input-message--error").innerHTML = mostrarMensajeDeErrror(tipoDeInput, input);
//     }

// }


// const tipoDeErrores = [
//     "valueMissing",
//     "typeMismatch",
//     "patternMismatch",
//     "customError"
// ];

// const mensajesDeError = {
//     email: {
//         valueMissing: "Este campo no puede estar vacio",
//         typeMismatch: "El correo no es válido"
//     },
//     password: {
//         valueMissing: "Este campo no puede estar vacio",
//         patternMismatch: "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
//     },
// }

// const validadores = {
//     nacimiento: (input) => validarNacimiento(input),
// };

// function mostrarMensajeDeErrror(tipoDeInput, input){
//     let mensaje ='';
//     tipoDeErrores.forEach((error) => {
//         if (input.validity[error]){
//             console.log(tipoDeInput, error);
//             console.log(input.validity[error]);
//             console.log(mensajesDeError[tipoDeInput][error]);
//             mensaje = mensajesDeError[tipoDeInput][error];
//         }
//     })
// }
