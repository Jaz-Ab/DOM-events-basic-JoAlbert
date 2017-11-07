/*Hasta que no se carguen toda la ventana(links.imagenes,css,etc) no se ejecuta el codigo*/
/*window.onload = function() {
  var board= document.querySelector(".board-js");

  board.addEventListener('click', function(event) {
    event.target.style.backgroundColor="pink";
    event.target.style.textAlign="center";
    //event.target.style.border="3px solid red";
  });
  board.addEventListener('dblclick', function(event) {
  event.target.style.backgroundColor="green";
  });
  board.addEventListener('mouseover', function(event) {
  event.target.style.backgroundColor="black";
  });
  var td=document.querySelector("td");
  board.addEventListener('click', function(event) {
  event.target.textContent="x";//solo agrega texto
  //event.target.innerHTML="x";//innerHTML tbn puedes agregar etiquetas html
  });
};
*/

window.onload = function() {
  var board= document.querySelector(".board-js");

  board.addEventListener("click", addX);
};

/*var centinel=false;

function addX(event) {
  if (centinel) {
    event.target.textContent="x";
    centinel=false;
  } else {
    event.target.textContent="O";
    centinel=true;
  }
};
*/

var centinel=true;

function addX(event) {
  if (centinel)
    event.target.textContent="x";
    else
    event.target.textContent="O";

    centinel = !centinel;
};
