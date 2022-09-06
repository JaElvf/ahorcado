function inicio() {
   pantallaJuego.style.display = "none";
   pantallaInicio.style.display = "block";
   pantallaAgregarPalabra.style.display = "none";
}

function nuevaPalabra() {
   pantallaJuego.style.display = "none";
   pantallaInicio.style.display = "none";
   pantallaAgregarPalabra.style.display = "block";
}

function principal() {
   pantallaJuego.style.display = "block";
   pantallaInicio.style.display = "none";
   pantallaAgregarPalabra.style.display = "none";
}

var pantallaInicio = document.getElementById("inicio");
var pantallaAgregarPalabra = document.getElementById("agregarPalabra");
var pantallaJuego = document.getElementById("juego");
var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");

pincel.fillStyle = "gray";
pincel.fillRect(0,0,600,400);
