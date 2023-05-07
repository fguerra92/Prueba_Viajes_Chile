// DOCUMENT READY PREVIO PARA QUE ESPERE A CARGAR EL HTML ANTES
// CODIGO CON SINTAXIS DE JQUERY
$(document).ready(function () {

// Haciendo Clic sobre la imagen de la card desaparece texto (TITULO Y PARRAFO)
$(".desaparecer").click(function () {
$(".aparece-desaparece").toggle();
});

})

// Alerta en boton enviar
let botonEnviar = document.querySelector(".botonEnviar");
botonEnviar.addEventListener("click", function () {
alert("Mensaje Enviado con exito...");
});