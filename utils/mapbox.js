const request = require('request');
const {MAPBOX_TOKEN} = require('../.env');

module.exports = (location, callback) => {
  const place = encodeURI(location);
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?${MAPBOX_TOKEN}&limit=1`;
  
  request({url, json: true}, (error, {body: {features: data}}) => {
    if(error){
      callback('cannot connect to server', undefined);
    }
    else if(data.length === 0){
      callback('no locations found', undefined);
    }
    else {
      const {place_name: placename, center} = data[0];
      callback(undefined, {placename, latitude: center[1], longitude: center[0]})
    };
  });
};