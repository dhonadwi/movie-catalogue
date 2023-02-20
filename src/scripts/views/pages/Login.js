import ApiSource from '../../data/api';
import Users from '../../utils/users';
import App from '../app';
import Swal from 'sweetalert2';

const Login = {
  async render() {
    return `
    <div class="content">
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
    const btnSubmit = document.querySelector('#submit');
    const name = document.querySelector('#name');
    const password = document.querySelector('#password');
    btnSubmit.addEventListener('click', async () => {
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
        app.renderPage();
      } else {
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
