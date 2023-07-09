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
const inputs = document.querySelectorAll("input");

inputs.forEach(input =>{
    input.addEventListener("blur", (input) => {
        valida(input.target);
    })
})

function valida(input){
    const tipoDeInput = input.dataset.type;
    // if(validadores[tipoDeInput]){
    //     validadores[tipoDeInput](input);
    // }
    
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".message--error").innerHTML = mostrarMensajeDeErrror(tipoDeInput, input);
    }

}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio",
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Minimo 8 caracteres, al menos una letra, un número y un caracter especial"
    },
    url: {
        valueMissing: "La url no puede estar vacia",
        typeMismatch: "Agrega una URL válida"
    },
    categoria: {
        valueMissing: "Agrega una categoria"
    },
    producto: {
        valueMissing: "Agrega el nombre del producto"
    },
    precio: {
        valueMissing: "Agrega un precio"
    }

}

function mostrarMensajeDeErrror(tipoDeInput, input){
    let mensaje ='';
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            // console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
 }
// const validadores = {
//     nacimiento: (input) => validarNacimiento(input),
// };