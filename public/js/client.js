!function(){
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const forecastDiv = document.querySelector('#forecast');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showLoading();
    fetchForecast();
  });

  function fetchForecast(){
    fetch(`/weather?location=${input.value}`)
      .then((response) => {
        response.json().then(({temperature, location} = {}) => {
          addForecast(temperature, location);
          clearInput();
        });
    })
  }

  function addForecast(temperature, location){
    const forecast = `the temperature is ${temperature}°C in ${location}`;
    forecastDiv.textContent = temperature ? forecast : 'no results found';
  }

  function clearInput(){
    input.value = '';
  }

  function showLoading(){
    forecastDiv.textContent = '...searching';
  }
}();


