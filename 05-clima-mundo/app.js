const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({ 
    direccion: {
        alias: 'd',
        desc: ' Dirección de la ciudad para obtener el clima',
        demmand: true
    }
}).argv;

let getInfo = async () => {

    try {
        let coors = await  lugar.getLugarLatLng(argv.direccion);
        let temp  = await-getClima( coors.lat, coors.lng );

        return `El clima en ${ coors.direccion } es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el clima en ${ coors.direccion }`;
    }

    

}

getInfo( argv.direccion )
    .then( mensaje => console.log(mensaje) )
    .catch( e => console.log(e) );

/*lugar.getLugarLatLng ( argv.direccion )
    .then( resp => {
        console.log(resp);
    }).catch( e => console.log(e) ); 


clima.getClima(9.9280694,-84.0907246)
    .then( temp => console.log(temp) )
    .catch( e => console.log(e) ) */

// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8
// https://developers.google.com/maps/documentation/geocoding/start