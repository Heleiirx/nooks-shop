
const inputs = document.querySelectorAll("input");

inputs.forEach(input =>{
    input.addEventListener("blur", (event) => {
        valida(event.target);
    })
})

function valida(input){
    console.log("Inicia valida");
    const tipoDeInput = input.dataset.type;
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".message--error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".message--error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
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
        patternMismatch: "Minimo 8 caracteres, al menos una letra mayuscula, una letra minuscula y un número"
    },
    url: {
        valueMissing: "La url no puede estar vacia",
    },
    categoria: {
        valueMissing: "Agrega una categoria"
    },
    producto: {
        valueMissing: "Agrega el nombre del producto"
    },
    precio: {
        valueMissing: "Agrega un precio"
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacio"
    }
}

function mostrarMensajeDeError(tipoDeInput, input){
    console.log('inicia mostrarMensajeDeError');
    let mensaje ='';
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
 }