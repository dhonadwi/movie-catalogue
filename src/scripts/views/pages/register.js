import ApiSource from '../../data/api';
import Swal from 'sweetalert2';
import { Spinner } from 'spin.js';

const Register = {
  async render() {
    return `
    <div class="content">
    <div id="spinner"></div>
    <section class="vh-100">
  <div class="container py-5 h-100">
  <div class="row d-flex align-items-center justify-content-center h-100">
  <div class="col-md-8 col-lg-7 col-xl-6">
  <img src="https://nbcpalmsprings.com/wp-content/uploads/sites/8/2021/12/BEST-MOVIES-OF-2021.jpeg"
  class="img-fluid" alt="Phone image">
  </div>
  <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
  <form>
  <h1>Register</h1>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="number" id="email" class="form-control form-control-lg" name="email" required/>
            <label class="form-label" for="form1Example13">No. Whatsapp</label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-lg btn-block" id="submit">Submit</button>
          <a href='#login' class="btn btn-success btn-lg btn-block" id="login">Back to Login</a>
        </form>
      </div>
    </div>
  </div>
</section>
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
    const name = document.querySelector('#email');
    document.forms[0].addEventListener('submit', async (e) => {
      e.preventDefault();
      spinner.spin(document.getElementById('spinner'));
      document.getElementById('spinner').style.display = 'block';
      const data = {
        email: name.value,
      };
      const response = await ApiSource.register_wa(data);
      // const response = await ApiSource.send_wa(
      //   name.value,
      //   'halao anada ddaftar papaap'
      // );
      spinner.stop();
      document.getElementById('spinner').style.display = 'none';
      Swal.fire({
        title: 'Error!',
        text: 'Kacau ah',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      if (response.status == 'success') {
        // console.log(response);
        spinner.stop();
        document.getElementById('spinner').style.display = 'none';
        Swal.fire({
          title: 'Success!',
          text: 'Please Check Email to Login',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } else {
        // console.log(response);
        spinner.stop();
        document.getElementById('spinner').style.display = 'none';
        Swal.fire({
          title: 'Error!',
          text: 'User has been registered',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    });
  },
};

export default Register;
