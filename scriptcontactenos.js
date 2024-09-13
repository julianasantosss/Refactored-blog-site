function alert(){
    alert("Mensaje enviado correctamente")
}

(() => {
    'use strict';
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    const forms = document.querySelectorAll('.needs-validation');
  
    // Bucle sobre los formularios y evitar el envío
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        form.classList.add('was-validated');
      }, false);
    });
  })();
  