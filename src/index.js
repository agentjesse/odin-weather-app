/* Next task:
- listener for focus out of cityInput, needs to use the city to call the API. need to refactor the async fn
*/

// importing CSS directly into the related js file
import './styles.css';

// module imports, from named and default
import { logToConsole as lg, tableToConsole as tb } from './logger'; //shorthand loggers

( async ()=>{
  try {
    //*free weatherapi api key, replace if compromised from your api account
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=XXX4eee2a31767b465e93a211647242603&q=toronto', { mode: 'cors' });
    if (!response.ok) { throw new Error('Network response was not ok (code 200)'); }
    // response.json() returns a promise that resolves with the parsed data of the response body.
    const data = await response.json();
    lg(data);
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

} )();
