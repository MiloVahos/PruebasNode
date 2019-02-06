const axios = require('axios');

const argv = require('yargs').options({ 
    direccion: {
        alias: 'd',
        desc: ' Dirección de la ciudad para obtener el clima',
        demmand: true
    }
}).argv;

console.log( argv.direccion );

let encodedUrl = encodeURI( argv.direccion )
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA`)
    .then( resp => {

        let location = resp.data.results[0];
        let coors = location.geometry.location;

        console.log( 'Location', location.formatted_address );
        console.log( 'LAT', coor.lat );
        console.log( 'LNG', coors.lng );

        // console.log( JSON.stringify( resp.data, undefined, 2 ) )
    }) .catch( e => console.log('ERROR',e))



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