const request = require('request');
const {DARKSKY_TOKEN} = require('../.env');

module.exports = ({latitude, longitude, placename}, callback) => {
  const url = `https://api.darksky.net/forecast/${DARKSKY_TOKEN}/${latitude},${longitude}?units=si`
  
  request({url, json: true}, (error, {body: {currently, error: responseError}}) => {
    if(error){
      callback('unable to connect to server', undefined)    
    } 
    else if(responseError){
      callback('no results found', undefined);
    }
    else {
      callback(undefined, {
        temperature: Math.ceil(currently.temperature),
        chanceOfRain: currently.precipProbability * 100,
        placename
      });
    }
  })
};