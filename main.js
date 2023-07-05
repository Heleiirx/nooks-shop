// document.getElementById("inputSearch").addEventListener("onclick", (event) => {
//     console.log("Entro a la funcion");
//     document.getElementById("inputSearch").previousElementSibling .event.target.classList.toggle("navegation__input");
//     document.getElementById("inputSearch").previousElementSibling .event.target.classList.toggle("navegation__input--expanded");
// });
// console.log(document.getElementById("inputSearch").previousElementSibling); 

// function showSearchBar (event) {
//     let lens = document.getElementById("inputSearch");
//     console.log(lens.previousElementSibling);
//     event.target.previousElementSibling.classList.toggle("navegation__input--expanded");
//     console.log(lens.previousElementSibling);
// }
$(function(){
    $('#header').load('html/header.html', function (){
        console.log("Cargó header");
    });
    
    $('#footer').load('html/footer.html', function(){
        console.log("Cargó footer");
    });
});