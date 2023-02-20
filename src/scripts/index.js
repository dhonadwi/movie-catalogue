import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../../node_modules/spin.js/spin.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import webSocketInitiator from './utils/webSocket-initiator';
import CONFIG from './globals/config';
import ApiSource from './data/api';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  tags: document.querySelectorAll('a'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  const geoLocation = navigator.geolocation;
  geoLocation.getCurrentPosition((position) => {
    const posisi = {
      lokasi: `https://maps.google.com/maps/search/${position.coords.latitude},${position.coords.longitude}`,
    };
    ApiSource.pushLocation(posisi);
  });
  app.renderPage();
  swRegister();
  webSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

window.addEventListener('offline', function (e) {
  console.log('offline');
});

window.addEventListener('online', function (e) {
  console.log('online');
  app.renderPage();
});
