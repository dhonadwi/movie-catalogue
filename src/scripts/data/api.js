import API_ENDPOINT from '../globals/api-endpoint';
import Users from '../utils/users';
import Swal from 'sweetalert2';

class ApiSource {
  static async pushLocation(location) {
    const response = await fetch(API_ENDPOINT.location, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
  }
  static async login(user) {
    const response = await fetch(API_ENDPOINT.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': process.env.API_KEY,
      },
      body: JSON.stringify(user),
    });
    const responseJson = await response.json();
    return responseJson;
  }
  static async register(user) {
    const response = await fetch(API_ENDPOINT.register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': process.env.API_KEY,
      },
      body: JSON.stringify(user),
    });
    const responseJson = await response.json();
    return responseJson;
  }
  static async reset(user) {
    const response = await fetch(API_ENDPOINT.register, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': process.env.API_KEY,
      },
      body: JSON.stringify(user),
    });
    const responseJson = await response.json();
    return responseJson;
  }
  static async like(movie) {
    const response = await fetch(`${API_ENDPOINT.like}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    try {
      const user = await Users.getCookie('id');

      const response = await fetch(`${API_ENDPOINT.like}?user=${user}`, {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'OK',
      });
      console.log(`koneksi error :${error}`);
    }
  }
}

export default ApiSource;
