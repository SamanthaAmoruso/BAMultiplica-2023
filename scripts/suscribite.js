function validarFormulario(event) 
{
  var formulario = event.target;

  if (formulario.checkValidity() === true) 
  {
    event.preventDefault();
    alert("Formulario enviado correctamente");
    window.location.href = "../index.html";
  } 

}

function arrepentirse() 
{
  alert("Usted volvera a la pagina principal sin haberse suscripto");
  window.location.href = "../index.html";
}
