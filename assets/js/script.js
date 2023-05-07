// DOCUMENT READY PREVIO PARA QUE ESPERE A CARGAR EL HTML ANTES
// CODIGO CON SINTAXIS DE JQUERY
$(document).ready(function () {

// FUNCION PARA APLICAR TOOLTIP
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
});


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