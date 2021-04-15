//Menú
//Variables
const menu = document.querySelector('#movil');
const degradado = document.querySelector('#degradado');
const btnMenu = document.querySelector('#btnMenu');
const btnSalir = document.querySelector('#salir');
const enlaces = document.querySelectorAll('.enlace');

//Eventos
btnMenu.addEventListener('click', mostrarMenu);
btnSalir.addEventListener('click', ocultarMenu);
document.addEventListener('click', filtroTecla);
degradado.addEventListener('click', ocultarMenu);
enlaces.forEach(enlace =>{
    enlace.addEventListener('click', ocultarMenu)
})

//Funciones
function filtroTecla(e){
    e.keyCode === 27 && ocultarMenu();
}

function mostrarMenu(){
    menu.style.left = "0";
    degradado.style.display = "block";
    setTimeout(()=>{
        degradado.style.background = 'rgb(126, 160, 235, .55)';
    }, 10);
}

function ocultarMenu(){
    menu.style.left = "-80%";
    degradado.style.background = 'rgba(0, 0, 0, 0)';
    setTimeout(()=>{
        degradado.style.display = 'none';
    }, 250);
}

//Validación del formulario
$('#btnForm').click(function() {
    const nombre = $('#nombre').val();
    const correo = $('#correo').val();
    const tituloMensaje = $('titulomensaje').val();
    const mensaje = $('#mensaje');
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 9000,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    if (nombre == '' || correo == '' || tituloMensaje == '' || mensaje == '') {
        Toast.fire({
            icon: 'info',
            title: 'Hay campos vacíos'
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Tu mensaje se envió correctamente',
            text: 'Recibirás tu respuesta en un plazo de 24 a 48 horas hábiles',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            showConfirmButton: false,
            timer: 9000,
            width: '55%',
            height: '60%'
        })
    }
})

//Contador
window.onscroll = function () {
    const cuenta = new CountUp('cuenta', 0, 753, 0, 2, true, true, ',');

    if (!cuenta.error) {
        cuenta.start();
    } else {
        console.error(cuenta.error);
    }
}