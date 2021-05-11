var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

// EXERCICE: concatène les groupCards avec lui-même pour les dupliquer
// les valeurs

var totalTarjetas;
totalTarjetas = grupoTarjetas.concat(grupoTarjetas); //la ca concatene du coup

function barajaTarjetas(){ //une fonction pour que ca "distribue"
    var resultado;
    resultado = totalTarjetas.sort(function(){
        return 0.5 - Math.random(); //grace a ca que ca devient random
    });
    return resultado;
}



  // EXERCICE: parcourez le tableau des cartes mélangées et pour chaque
  // élément, créez un div (chargez-le dans une variable) et déclarez que son
  // innerHTML est le div avec la classe "card" et à l'intérieur
  // de celui-ci, un div avec la classe "card__content".
  // Ajoute également la valeur de l'élément en tant que contenu de la carte
  
function reparteTarjetas(){
    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajaTarjetas();
    mesa.innerHTML = "";

    tarjetasBarajadas.forEach(function(e) {
        var tarjetas = document.createElement('div');
        tarjetas.innerHTML = '<div class="tarjeta">' + '<div class="tarjeta__contenido' + e + "</div>" + "</div>" 
        
        mesa.appendChild(tarjetas);
    });
}


// EXERCICE: une fois que vous avez créé la carte, et toujours à l'intérieur du
  // boucle, ajoute la carte générée comme "enfant" du nœud de table.

  // BONUS: vous pourriez avoir des cartes distribuées uniquement lorsque
  // un bouton est enfoncé qui dit "distribuer les cartes"

  function descubrir() {
      var descubiertas;
      var totalDescubiertas = document.querySelectorAll(".descubierta");

      this.setAttribute("ejemplo", "fdjnsk");
      
      if (totalDescubiertas.length > 1) {
          return;
      }

      this.classList.add("descubierta");

      descubiertas = document.querySelectorAll(".descubierta");
      if (descubiertas.length < 2) {
          return;
      }

      if ((descubiertas)[0].textContent === (descubiertas)[1].textContent) {
          console.log("acierto");
      } else {
          console.log("error");
      }
    }

  reparteTarjetas();

  document.querySelectorAll(".tarjeta").forEach(function(elemento){
      elemento.addEventListener("click", descubrir);
  });