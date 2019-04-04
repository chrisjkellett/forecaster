const path = require('path');
const express = require('express');
const app = express();
const sampleResponse = require('./sampleJSON.json');

app.use(express.static(path.join(__dirname, './public')));

app.get('/weather', (req, res) => {
  if(req.query.location){
    sampleResponse.data.location = req.query.location;
    return res.json(sampleResponse);
  }

  res.json({
    error: 'location must be provided'
  })

});

app.listen(3000);