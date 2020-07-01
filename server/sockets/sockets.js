const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje2', {
        rol: 'Administrador',
        nombre: 'Miguel'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    client.on('enviarMensaje', (data, callback) => {

        client.broadcast.emit('enviarMensaje2', data);
        // if (mensaje.mensaje) {
        //     callback({
        //         resp: 'Todo salio bien!!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio MALLL!!'
        //     });
        // }
    });
});