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

function dibujarLinea(ix,iy,fx,fy,color) {
   pincel.moveTo(ix,iy);
   pincel.lineTo(fx,fy);
   pincel.lineWidth = 6;
   pincel.lineCap = "round";
   pincel.strokeStyle = color;
   pincel.stroke();
}

function dibujarCirculo(x, y, radio,color) {
   pincel.fillStyle = "#0A3871";
   pincel.beginPath();
   pincel.arc(x, y, radio, 0, 2*Math.PI);
   pincel.stroke();
}

function dibujarError(){
   let color = "#0A3871";
   switch (numeroErrores) {
      case 0:
         numeroErrores++;
         //suelo
         dibujarLinea((ancho/2)-(ancho*0.3),(alto/2)+(alto*0.2),(ancho/2)+(ancho*0.3),(alto/2)+(alto*0.2),color);
         break;
   
      case 1:
         numeroErrores++;
         //palo
         dibujarLinea((ancho/2)-(ancho*0.2),(alto/2)-(alto*0.3),(ancho/2)-(ancho*0.2),(alto/2)+(alto*0.2),color);
         break;
      case 2:
         numeroErrores++;
         //travesanho
         dibujarLinea((ancho/2)-(ancho*0.2),(alto/2)-(alto*0.3),(ancho/2)+(ancho*0.2),(alto/2)-(alto*0.3),color);
         break;
      case 3:
         numeroErrores++;
         //cuerda
         dibujarLinea((ancho/2)+(ancho*0.2),(alto/2)-(alto*0.3),(ancho/2)+(ancho*0.2),(alto/2)-(alto*0.2),color);
         break;
      case 4:
         numeroErrores++;
         //cabeza
         dibujarCirculo((ancho/2)+(ancho*0.2),((alto/2)-(alto*0.2))+25,25,color);
         break;
      case 5:
         numeroErrores++;
         //dorso
         dibujarLinea((ancho/2)+(ancho*0.2),(alto/2)-(alto*0.2)+50,(ancho/2)+(ancho*0.2),(alto/2)-(alto*0.01),color);
         break;
      case 6:
         numeroErrores++;
         //pierna derecha
         dibujarLinea((ancho/2)+(ancho*0.2),(alto/2)-(alto*0.01),(ancho/2)+(ancho*0.1),(alto/2)+(alto*0.09),color);
         break;
      case 7:
         numeroErrores++;
         //pierna izquierda
         dibujarLinea((ancho/2)+(ancho*0.2),(alto/2)-(alto*0.01),(ancho/2)+(ancho*0.3),(alto/2)+(alto*0.09),color);
         break;
      case 8:
         numeroErrores++;
         //pierna derecha
         dibujarLinea((ancho/2)+(ancho*0.2),(alto/2)-(alto*0.2)+50,(ancho/2)+(ancho*0.1),(alto/2)-(alto*0.05),color);
         break;
      case 9:
         numeroErrores++;
         //brazo izquierdo
         dibujarLinea((ancho/2)+(ancho*0.2),(alto/2)-(alto*0.2)+50,(ancho/2)+(ancho*0.3),(alto/2)-(alto*0.05),color);
         break;
   }
}

function dibujarEspacios(cantidad) {
   let puntoInicial = 0.025;
   let puntoFinal = 0.1;
   let altura = alto-(alto*0.15);

   if(cantidad % 2 == 0){
      for (let i = 1; i <= cantidad; i++) {
         if(i <= cantidad / 2){
            dibujarLinea((ancho/2)+(ancho*puntoInicial),altura,(ancho/2)+(ancho*puntoFinal),altura);
            puntoInicial+=0.125;
            puntoFinal+=0.125;
         }
         else{
            if(i == (cantidad/2)+1){
               puntoInicial = 0.025;
               puntoFinal = 0.1;
            }
            dibujarLinea((ancho/2)-(ancho*puntoInicial),altura,(ancho/2)-(ancho*puntoFinal),altura);
            puntoInicial+=0.125;
            puntoFinal+=0.125;
         }
      }
   }
   else{

   }
   
}

function dibujarLetra(letra,x,y,estilo,color) {
   pincel.fillStyle = color;
   pincel.font=estilo;
   pincel.fillText(letra,x,y);
}
var pantallaInicio = document.getElementById("inicio");
var pantallaAgregarPalabra = document.getElementById("agregarPalabra");
var pantallaJuego = document.getElementById("juego");
var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");
const ancho = lienzo.width;
const alto = lienzo.height;
var numeroErrores = 0;
var posicionLetras = new Array();

//fondo
pincel.fillStyle = "gray";
pincel.fillRect(0,0,600,800);
dibujarError();
dibujarEspacios(8);
window.onkeydown = dibujarError;

dibujarLetra("A",(ancho/2)-(ancho*0.090),alto-(alto*0.16),"3em 'Inter', sans-serif","#0A3871");

/*pincel.fillStyle = "#0A3871";
pincel.font="3em 'Inter', sans-serif";
pincel.fillText("B",(ancho/2)+(ancho*0.035),alto-(alto*0.16));
pincel.fillText("A",(ancho/2)-(ancho*0.090),alto-(alto*0.16));
pincel.fillText("A",(ancho/2)-(ancho*0.465),alto-(alto*0.16));*/