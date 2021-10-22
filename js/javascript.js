<script type="text/javascript">
var modal = document.querySelector(".ventana");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".boton-cerrar");
function toggleModal() {
modal.classList.toggle("mostrar-ventana");
}
function windowOnClick(event) {
if (event.target === modal) {
toggleModal();
}
}
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
</script>