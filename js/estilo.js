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