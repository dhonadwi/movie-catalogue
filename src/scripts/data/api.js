import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class ApiSource {
  static async pushLocation(location) {
    const response = await fetch(API_ENDPOINT.location, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(location), // body data type must match "Content-Type" header
    });
    const responseJson = await response.json();
    // return responseJson;
    console.log(responseJson);
  }
  static async login(user) {
    const response = await fetch(API_ENDPOINT.login, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: '*',
        // 'Access-Control-Request-Headers': 'Authorization',
        // Authorization: CONFIG.TOKEN,
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'POST',
      },
      body: JSON.stringify(user),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default ApiSource;
