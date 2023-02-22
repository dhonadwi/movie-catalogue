import API_ENDPOINT from '../globals/api-endpoint';
import Users from '../utils/users';

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
      // mode: 'cors',
      // credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
        // Accept: '*',
        // 'Access-Control-Request-Headers': 'Authorization',
        // Authorization: CONFIG.TOKEN,
        // 'Access-Control-Allow-Origin': 'https://papuca.my.id',
        // 'Access-Control-Allow-Methods': 'POST',
        // 'X-Auth-Token': CONFIG.TOKEN,
        'X-Auth-Token': process.env.API_KEY,
      },
      body: JSON.stringify(user),
    });
    const responseJson = await response.json();
    // const responseJson = await response;
    return responseJson;
  }
  static async like(movie) {
    const response = await fetch(`${API_ENDPOINT.like}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'X-Auth-Token': process.env.API_KEY,
      },
      body: JSON.stringify(movie),
    });
    const responseJson = await response.json();

    return responseJson;
  }
  static async deleteLike(movie) {
    const response = await fetch(`${API_ENDPOINT.like}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    const responseJson = await response.json();
    return responseJson;
  }
  static async getAllMovie() {
    const user = await Users.getCookie('id');
    console.log(user);
    // return console.log(`${API_ENDPOINT.like}?user=siapa`);
    const response = await fetch(`${API_ENDPOINT.like}?user=${user}`, {
      // const response = await fetch(`${API_ENDPOINT.like}/`, {
      // const response = await fetch(`${API_ENDPOINT.getLike}`, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default ApiSource;
