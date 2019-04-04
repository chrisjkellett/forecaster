const path = require('path');
const express = require('express');
const app = express();
const mapboxAPI = require('./utils/mapbox');
const darkskyAPI = require('./utils/darksky');

app.use(express.static(path.join(__dirname, './public')));

function throwError(msg){
  return {
    error: msg || 'no results found'
  }
}

app.get('/weather', (req, res) => {
  if(!req.query.location){
    return res.json(throwError('a location must be provided')) 
  }
  mapboxAPI(req.query.location, (error, mapboxData) => {
    if(error){
      return res.json(throwError())
    }
    darkskyAPI(mapboxData, (error, {data}, location) => {
      if(error){
        return res.json(throwError('something went wrong'));
      }
      res.json({
        temperature: Math.round(data.currently.temperature),
        location: location
      })
    });
  });
});

app.listen(3000);