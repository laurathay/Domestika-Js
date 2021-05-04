let tabletito = ["🙆🏻‍♀️", "💁🏻‍♀️", "👩🏻‍💻"]

var totalTarjetas = grupoTarjetas;

function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";