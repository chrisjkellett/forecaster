const axios = require('axios');
const {fetchDarkskyURL} = require('./urls');
const printForecast = require('./printForecast');

module.exports = ({latitude, longitude, location}, callback) => {
  axios.get(fetchDarkskyURL(latitude, longitude))
    .then((response) => {
      printForecast(response, location);
    })
    .catch((error) => {
      console.log(error);
    });
}