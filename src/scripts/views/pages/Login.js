import ApiSource from '../../data/api';
import Users from '../../utils/users';
import App from '../app';
import Swal from 'sweetalert2';
import { Spinner } from 'spin.js';

const Login = {
  async render() {
    return `
    <div class="content">
    <div id="spinner"></div>
    <h2 class="content__heading">Halaman Login</h2>
    <div id="movies" class="movies">
      <form action="#">
      <input type="text" name="name" id="name">
      <input type="password" name="password" id="password">
      <input type="button" value="Submit" id="submit">
      </form>
    </div>
  </div>
    `;
  },
  async afterRender() {
    const spinner = new Spinner({
      lines: 10,
      length: 6,
      width: 3,
      radius: 6,
      color: 'black',
      animation: 'spinner-line-fade-quick',
      // lines: 13, // The number of lines to draw
      // length: 38, // The length of each line
      // width: 17, // The line thickness
      // radius: 45, // The radius of the inner circle
      scale: 1, // Scales overall size of the spinner
      corners: 1, // Corner roundness (0..1)
      speed: 1, // Rounds per second
      rotate: 0, // The rotation offset
      animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
      direction: 1, // 1: clockwise, -1: counterclockwise
      // color: '#ffffff', // CSS color or array of colors
      // fadeColor: 'transparent', // CSS color or array of colors
      // top: '50%', // Top position relative to parent
      // left: '50%', // Left position relative to parent
      // shadow: '0 0 1px transparent', // Box-shadow for the lines
      // // zIndex: 2000000000, // The z-index (defaults to 2e9)
      className: 'spinner', // The CSS class to assign to the spinner
      // position: 'absolute', // Element positioning
    });
    spinner.spin(document.getElementById('spinner'));
    document.getElementById('spinner').style.display = 'none';
    const btnSubmit = document.querySelector('#submit');
    const name = document.querySelector('#name');
    const password = document.querySelector('#password');
    btnSubmit.addEventListener('click', async () => {
      spinner.spin(document.getElementById('spinner'));
      document.getElementById('spinner').style.display = 'block';
      const data = {
        nama: name.value,
        pass: password.value,
      };
      const response = await ApiSource.login(data);
      console.log(response);
      if (response.status == 'success') {
        // const token = response.token;
        // const tokenDec = atob(token);
        // console.log(tokenDec);
        await Users.setCookie('id', `${response.token}`, 1);
        // await Users.setCookie('token', `${token}`, 1);
        const app = new App({
          button: document.querySelector('#hamburgerButton'),
          drawer: document.querySelector('#navigationDrawer'),
          content: document.querySelector('#mainContent'),
          tags: document.querySelectorAll('a'),
        });
        spinner.stop();
        document.getElementById('spinner').style.display = 'none';
        app.renderPage();
      } else {
        spinner.stop();
        document.getElementById('spinner').style.display = 'none';
        Swal.fire({
          title: 'Error!',
          text: 'User not Authorized',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    });
  },
};

export default Login;
