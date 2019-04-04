const axios = require('axios');
const {fetchMapboxURL} = require('./urls');

module.exports = (location, callback) => {
  if(location){
    axios.get(fetchMapboxURL(location))
      .then((res) => {
        const data = res.data.features[0];
        callback(undefined, {
          location: data.place_name,
          latitude: data.center[1],
          longitude: data.center[0]
        });
      })
      .catch((error) => {
        callback(error);
      })
  }
  
  else {
    console.log('please specify a location');
  }
};