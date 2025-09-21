// Botón ir arriba
document.addEventListener('DOMContentLoaded', function() {
    var btnArriba = document.getElementById('btn-ir-arriba');
    window.addEventListener('scroll', function() {
        if(window.scrollY > 200) {
            btnArriba.style.display = 'block';
        } else {
            btnArriba.style.display = 'none';
        }
    });
    btnArriba.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
// Confirmación visual del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#contacto form');
    var mensaje = document.getElementById('mensaje-confirmacion');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.reset();
            mensaje.style.display = 'block';
            setTimeout(function() {
                mensaje.style.display = 'none';
            }, 3000);
        });
    }
});
