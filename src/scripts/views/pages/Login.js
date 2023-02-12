import { async } from 'regenerator-runtime';
import ApiSource from '../../data/api';

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
        name: name.value,
        password: password.value,
      };
      const response = await ApiSource.login(data);
      console.log(response);
    });
  },
};

export default Login;
