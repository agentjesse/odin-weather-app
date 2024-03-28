/* Next task:

-Optional: switch to using more variables for the displayWeather fn
*/

// JS/CSS imports
import './styles.css';
import { logToConsole as lg, tableToConsole as tb } from './logger'; //shorthand loggers

//preload an icon in browser cache. just call this fn with the icon url and await its settlement
const preloadIconFromURL = async iconURL=> new Promise( (resolve, reject) => {
  //create element in memory
  const img = new Image();
  //add listeners to settle promise when icon has finished loading or not
  img.addEventListener( 'load', ()=> resolve() );
  img.addEventListener( 'error', error=> reject(error) );
  //set the icon's url which will trigger a listener
  img.src = iconURL;
} );

const displayWeather = async weatherData=> {
  lg(weatherData);
  //preload image in browser cache via waiting for a promise settlement. future use of the url will be instant!
  const iconURL = `https:${weatherData.current.condition.icon}`;
  await preloadIconFromURL(iconURL);

  //replace icon with new url via CSS
  document.querySelector('.weatherCondition .icon').style.backgroundImage = `url(${ iconURL })`;
  //stop loading animation
  document.querySelector('.weatherCondition .icon').classList.remove('loading');
  //display weather condition
  document.querySelector('#conditionSpan').textContent = `${ weatherData.current.condition.text }`;
  //display temps
  document.querySelector('#celsiusSpan').textContent = `${ weatherData.current.temp_c } ℃`;
  document.querySelector('#fahrenheitSpan').textContent = `${ weatherData.current.temp_f } ℉`;
};

const startWeatherFetch = async searchCity=> {
  try {
    //*free weatherapi api key, replace if compromised from your api account
    // const response = await fetch('https://api.weatherapi.com/v1/current.json?key=4eee2a31767b465e93a211647242603&q=toronto', { mode: 'cors' });
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4eee2a31767b465e93a211647242603&q=${ searchCity.trim().toLowerCase() }`, { mode: 'cors' });
    if (!response.ok) {
      //update elements for bad input
      document.querySelector('.weatherCondition .icon').style.backgroundImage = 'none';
      document.querySelector('#conditionSpan').textContent = '❌';
      document.querySelector('#celsiusSpan').textContent = '❌';
      document.querySelector('#fahrenheitSpan').textContent = '❌';
      throw new Error('Network response was not ok');
    } else {
      // response.json() returns a promise that resolves with the parsed data of the response body.
      const weatherData = await response.json();
      displayWeather(weatherData);
    }
  } catch (error) {
    lg(error);
  }

  /*
  //BELOW IS OLD NON ASYNC/AWAIT CODE:

  //*free weatherapi api key, replace if compromised from your api account
  fetch('https://api.weatherapi.com/v1/current.json?key=4eee2a31767b465e93a211647242603&q=toronto', { mode: 'cors' })
    .then((response) => {
      // Check if response successful
      if (!response.ok) { throw new Error('Network response was not ok \(code 200\)') }
      // response.json() returns a promise to use in another .then
      // It resolves with the parsed data of the response body.
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // console.log('Location:', data.location.name);
      // console.log('Temperature:', data.current.temp_c + '°C');
      // console.log('Condition:', data.current.condition.text);
    })
    .catch((err) => {
      // Error :(
    });
  */

};

document.querySelector('#cityInput').addEventListener( 'focusout', e=> {
  e.stopPropagation();
  //add loading image and its animation right away.
  document.querySelector('.weatherCondition .icon').style.backgroundImage = 'url(\'./assets/loading.svg\')';
  document.querySelector('.weatherCondition .icon').classList.add('loading');
  //clear old results
  document.querySelector('#conditionSpan').textContent = 'Loading...';
  document.querySelector('#celsiusSpan').textContent = '';
  document.querySelector('#fahrenheitSpan').textContent = '';
  //start the asynchronous fn. Ignoring the returned promise, but .then registration can be added if needed.
  startWeatherFetch( e.target.value ? e.target.value : e.target.placeholder );
});
