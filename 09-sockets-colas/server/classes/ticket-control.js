const fs = require("fs");

class TicketControl {

  constructor() {
    this.ultimo = 0;
    this.hoy = new Date().getDate();

    let data = require('../data/data.json');

    if( data.hoy === this.hoy ) {
      this.ultimo = data.ultimo;
    } else {
      this.reiniciarConteo();
    }
  }

  siguiente() {
    this.ultimo += 1;
    this.grabarArchivo();
    return `Ticket ${ this.ultimo }`;
  }

  reiniciarConteo() {
    this.ultimo = 0;
    console.log("Se ha inicializado el sistema");
    this.grabarArchivo();
  }

  grabarArchivo(){
    let jsonData = {
      ultimo: this.ultimo,
      hoy: this.hoy
    }
    let jsonDataString = JSON.stringify(jsonData);
    fs.writeFileSync('./server/data/data.json', jsonDataString);
  }

}

module.exports = {
  TicketControl
}