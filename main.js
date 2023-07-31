// Funcion que carga header y footer en todas las paginas
$(function(){
    $('#header').load('html/header.html', function (){
        // console.log("Cargó header");
    });
    
    $('#footer').load('html/footer.html', function(){
        // console.log("Cargó footer");
    });
});

