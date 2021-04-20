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