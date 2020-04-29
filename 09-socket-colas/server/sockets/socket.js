const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente();
        console.log(siguiente);
        callback(siguiente);
    });
    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
    });
    client.on('atenderTicket', (data, callback) => {
        if(!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'el escritorio es necesario',
            });
        }
        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        callback(atenderTicket);
    });
});