document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("regBtn");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido")
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const terminos = document.getElementById("terminos");
  
    formulario.addEventListener("click", function () {
      if (
        password1.value.length < 6 ||
        password1.value !== password2.value ||
        !terminos.checked || nombre.value === "" || apellido.value === ""
      ) {
        showAlertError();
      } else {
        showAlertSuccess();
      }
    });
});
  
function showAlertSuccess() {
   document.getElementById("alert-success").classList.add("show");
}
  
function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}