//---------DOM affiche valeur 

// var nombre = document.querySelector("#nombre").value;
// var fecha = document.querySelector("#fecha").value;

// console.log(nombre); //ca affichera la valeur de l'id donnée à 'linput
// console.log(fecha);


//---------fonction et eventlisteners

// function recogeDatos() {
//     var nombre = document.querySelector("#nombre").nodeValue;
//     var fecha = document.querySelector("#fecha").nodeValue;
//     var edad = 2019 - fecha;

//     console.log("hola, " + nombre + ", tienes " + edad + " annos"); 
// }


// function saludar(mensaje, nombre) {
//     console.log(mensaje + nombre);
// }

// saludar("Hola qué tal", "Javier");

// var miForm = document.querySelector("#formulario");
// miForm.addEventListener("submit", recogeDatos);



//--------fonction et alter DOM content avec inner.html

// function recogeDatos(evento) {
//     evento.preventDefault();

//     var nombre = document.querySelector("#nombre").value;
//     var fecha = document.querySelector("#fecha").value;
//     var edad = 2019 - fecha;
//     var bienvenida = document.querySelector("#bienvenida");
//     var mensaje = "<p>hola, " + nombre + ", tienes " + edad + " anos</p>"; 
//     bienvenida.innerHTML = mensaje;
// }

// var miForm = document.querySelector("#formulario");

// miForm.addEventListener("submit", recogeDatos);


//----------conditionals introduit 

function recogeDatos(evento) {
    evento.preventDefault();

    var nombre = document.querySelector("#nombre").value;
    var fecha = document.querySelector("#fecha").value;
    var edad = 2019 - fecha;
    var bienvenida = document.querySelector("#bienvenida");
    var mensajeEdad; 
    var mensaje;

    if (edad > 30){
        mensajeEdad = "abuelo";
    } else if (edad < 30){
        mensajeEdad = "jovenzuelo";
    } else {
        mensajeEdad = "no me lo creo";
    }

    mensaje = 
     "<p>hola, " + 
     nombre + 
     ", tienes " + 
     edad + 
     " anos</p>" +
     mensajeEdad +
     "</p>";

     bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);


