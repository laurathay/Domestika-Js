var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

// EXERCICE: concatène les groupCards avec lui-même pour les dupliquer
// les valeurs
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}



function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function (e) {
    var tarjetas = document.createElement('div');
    tarjetas.innerHTML = '<div class="tarjeta">' + '<div class="tarjeta__contenido">' + e + "</div>" + "</div>"

    mesa.appendChild(tarjetas);
  })

}
  // EXERCICE: parcourez le tableau des cartes mélangées et pour chaque
  // élément, créez un div (chargez-le dans une variable) et déclarez que son
  // innerHTML est le div avec la classe "card" et à l'intérieur
  // de celui-ci, un div avec la classe "card__content".
  // Ajoute également la valeur de l'élément en tant que contenu de la carte
  


function descubrir() {
  this.classList.add("descubierta");
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function (elemento) {
  elemento.addEventListener("click", descubrir);
});

// EXERCICE: une fois que vous avez créé la carte, et toujours à l'intérieur du
  // boucle, ajoute la carte générée comme "enfant" du nœud de table.

  // BONUS: vous pourriez avoir des cartes distribuées uniquement lorsque
  // un bouton est enfoncé qui dit "distribuer les cartes"