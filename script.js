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
   jugar();
}

function dibujarLinea(ix,iy,fx,fy,color) {
   pincel.beginPath();
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

function dibujarHorca(){
   let color = "#0A3871";
   switch (numeroErrores) {
      case 0:
         numeroErrores++;
         //suelo
         dibujarLinea(ancho*0.2,alto*0.7,ancho*0.8,alto*0.7,color);
         break;
   
      case 1:
         numeroErrores++;
         //palo
         dibujarLinea(ancho*0.3,alto*0.2,ancho*0.3,alto*0.7,color);
         break;
      case 2:
         numeroErrores++;
         //travesanho
         dibujarLinea(ancho*0.3,alto*0.2,ancho*0.7,alto*0.2,color);
         break;
      case 3:
         numeroErrores++;
         //cuerda
         dibujarLinea(ancho*0.7,alto*0.2,ancho*0.7,alto*0.3,color);
         break;
      case 4:
         numeroErrores++;
         //cabeza
         dibujarCirculo(ancho*0.7,(alto*0.3)+25,25,color);
         break;
      case 5:
         numeroErrores++;
         //dorso
         dibujarLinea(ancho*0.7,(alto*0.3)+50,ancho*0.7,alto*0.49,color);
         break;
      case 6:
         numeroErrores++;
         //pierna derecha
         dibujarLinea(ancho*0.7,alto*0.49,ancho*0.6,alto*0.59,color);
         break;
      case 7:
         numeroErrores++;
         //pierna izquierda
         dibujarLinea(ancho*0.7,alto*0.49,ancho*0.8,alto*0.59,color);
         break;
      case 8:
         numeroErrores++;
         //pierna derecha
         dibujarLinea(ancho*0.7,(alto*0.3)+50,ancho*0.6,alto*0.45,color);
         break;
      case 9:
         numeroErrores++;
         //brazo izquierdo
         dibujarLinea(ancho*0.7,(alto*0.3)+50,ancho*0.8,alto*0.45,color);
         break;
   }
}

function dibujarEspacios(cantidad) {
   let puntoInicial = 0.1;
   let puntoFinal = puntoInicial + 0.08;
   let altura = alto*0.84;
   let color = "#0A3871";
   if(cantidad % 2 == 0){
      if(cantidad < 8){
         for(let i = cantidad/2; i < 4;i++){
            puntoInicial+=0.1;
         }
         puntoFinal = puntoInicial +0.08;
      }
      for(i=0; i < cantidad; i++){
         dibujarLinea(ancho*puntoInicial, altura, ancho*puntoFinal, altura,color);
         puntoInicial+= 0.1;
         puntoFinal= puntoInicial+0.08;
      }
   }
   else{
      puntoInicial = 0.05;
      for(let i = cantidad/2; i < 4;i++){
         puntoInicial+=0.1;
      }
      puntoFinal = puntoInicial +0.08;
      console.log(puntoInicial);
      console.log(puntoFinal);
      for(i=0; i < cantidad; i++){
         dibujarLinea(ancho*puntoInicial, altura, ancho*puntoFinal, altura,color);
         puntoInicial+= 0.1;
         puntoFinal= puntoInicial+0.08;
      }
   }
   
}

function dibujarLetra(letra,x,y,estilo,color) {
   pincel.fillStyle = color;
   pincel.font=estilo;
   pincel.fillText(letra,x,y);
}

function mensaje(estado) {
   if(estado){
      dibujarLetra("¡Felicidades ganaste!",ancho*0.35,alto*0.25,"1em 'Inter', sans-serif","green");
   }
   else{
      dibujarLetra("¡Que mal, perdiste!",ancho*0.35,alto*0.25,"1em 'Inter', sans-serif","red");
   }
}

function jugar(){
   let estado = true;
   dibujarHorca();
   dibujarEspacios(7);
   window.onkeydown = dibujarHorca;
   mensaje(estado);
}
var pantallaInicio = document.getElementById("inicio");
var pantallaAgregarPalabra = document.getElementById("agregarPalabra");
var pantallaJuego = document.getElementById("juego");
var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");
const ancho = lienzo.width;
const alto = lienzo.height;
var numeroErrores = 0;
var start = false;
if(start){
   jugar();
}

//fondo
//pincel.fillStyle = "gray";
//pincel.fillRect(0,0,600,800);

//par
/*
dibujarLetra("A",ancho*0.1,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("B",ancho*0.2,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("C",ancho*0.3,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("B",ancho*0.4,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("E",ancho*0.5,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("F",ancho*0.6,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("Z",ancho*0.7,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("B",ancho*0.8,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
*/

//impar
/*
dibujarLetra("A",ancho*0.15,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("B",ancho*0.25,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("C",ancho*0.35,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("B",ancho*0.45,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("E",ancho*0.55,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("F",ancho*0.65,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
dibujarLetra("Z",ancho*0.75,alto*0.83,"4em 'Inter', sans-serif","#0A3871");
*/


//dibujarLinea(ancho/2,0,ancho/2,alto,"red");
//dibujarLinea(0,alto/2,ancho,alto/2,"red");