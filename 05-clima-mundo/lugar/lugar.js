const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI( direccion )
    let resp =  await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }+&key=AIzaSyD-cqhsI5ru7Ug7ypMnNU0ULvrpDL9z0ak`)
    
    if ( resp.data.status === "ZERO_RESULTS" ) {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`)
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {    direccion : location.formatted_address, 
                lag : coors.lat,
                lng : coors.lng 
            };

}

module.exports = {
    getLugarLatLng
}

