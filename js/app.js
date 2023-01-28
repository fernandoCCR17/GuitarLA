const formulario = document.querySelector("#formulario");

document.addEventListener('DOMContentLoaded', escuchaEventos);

function escuchaEventos(){
    formulario.addEventListener('submit', verificaForm);
}

function verificaForm(e){
    e.preventDefault();
    const cantidad = document.querySelector('#cantidad');
    const mensaje = cantidad.parentElement.querySelector('.mensaje');
    mensaje ? mensaje.remove() : '';
    if(cantidad.value.trim() === ''){
        mostrarMensaje('Ingrese una cantidad', cantidad.parentElement);
    }
}

function mostrarMensaje(mensaje, selector){
    const parrafoMensaje = document.createElement('P');
    parrafoMensaje.classList.add('mensaje');
    parrafoMensaje.textContent = mensaje;
    parrafoMensaje.style.textAlign = 'center';
    parrafoMensaje.style.color = '#e99401';
    parrafoMensaje.style.fontWeight = 'bold';
    selector.appendChild(parrafoMensaje);
    setTimeout(() => {
        parrafoMensaje.remove();
    }, 3000);
}