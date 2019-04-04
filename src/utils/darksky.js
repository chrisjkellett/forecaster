const axios = require('axios');
const {fetchDarkskyURL} = require('./urls');

module.exports = ({latitude, longitude, location}, callback) => {
  axios.get(fetchDarkskyURL(latitude, longitude))
    .then((response) => {
      callback(undefined, response, location);
    })
    .catch((error) => {
      callback(error);
    });
}