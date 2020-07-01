var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
});

socket.emit('enviarMensaje', {
    mensaje: 'Hola mundo',
    usuario: 'Miguel'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp);
});

//Escuchar mensaje desde el servidor
socket.on('enviarMensaje2', function(mensaje) {
    console.log(mensaje);
});