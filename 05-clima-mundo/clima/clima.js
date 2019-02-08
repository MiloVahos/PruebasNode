const axios = require('axios');

const getClima = async ( lat, lng ) => {

    let resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=d4c3859c8186fb08ed40b063bf7025e0`);

    let temp = resp.data.main.temp;

    return temp;

}

module.exports = { getClima };

// API KEY: d4c3859c8186fb08ed40b063bf7025e0