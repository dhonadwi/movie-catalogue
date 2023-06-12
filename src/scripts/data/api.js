import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';
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
    // console.log(responseJson);
  }
  static async login(user) {
    const response = await fetch(API_ENDPOINT.login, {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        // 'X-Auth-Token': process.env.API_KEY,
        'X-Auth-Token': CONFIG.TOKEN,
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

  static async register_wa(user) {
    // return console.log(user);
    const response = await fetch(API_ENDPOINT.register_wa, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': process.env.API_KEY,
      },
      body: JSON.stringify(user),
    });
    const responseJson = await response.json();
    if (responseJson.status == 'success') {
      const send_wa = await this.send_wa(
        JSON.stringify(user),
        responseJson.message
      );
      return responseJson;
    }
    return responseJson;
  }
  static async send_wa(user, message) {
    const myHeaders = new Headers();
    const formData = new FormData();

    myHeaders.append('Authorization', CONFIG.AUTH);

    formData.append('delay', '0-5');
    formData.append('message', message);
    formData.append('target', user);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow',
    };
    const response = await fetch(API_ENDPOINT.send_wa, requestOptions);
    const responseJson = await response.text();
    return responseJson;
  }
  static async reset(user) {
    // const response = await fetch(API_ENDPOINT.register, {
    const response = await fetch(API_ENDPOINT.register_wa, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': process.env.API_KEY,
      },
      body: JSON.stringify(user),
    });
    const responseJson = await response.json();
    if (responseJson.status == 'success') {
      const send_wa = await this.send_wa(
        JSON.stringify(user),
        responseJson.message
      );
      return responseJson;
    }
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
      // console.log(`koneksi error :${error}`);
    }
  }
}

export default ApiSource;
