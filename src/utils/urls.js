const {MAPBOX_TOKEN, DARKSKY_TOKEN} = require('../../.env');

module.exports = {
  fetchMapboxURL: (location) => {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?${MAPBOX_TOKEN}&limit=1`
  },
  fetchDarkskyURL: (latitude, longitude) => {
    return `https://api.darksky.net/forecast/${DARKSKY_TOKEN}/${latitude},${longitude}?units=si`
  }
}