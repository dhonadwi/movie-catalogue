const Users = {
  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 1 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  },
  async getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = await decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  },
  location: async () => {
    const geoLocation = navigator.geolocation;
    const cek = await geoLocation.getCurrentPosition((position) => {
      return `${position.coords.latitude},${position.coords.longitude}`;
    });
  },
  async cookie() {
    let id = await this.getCookie('id');
    if (id != '') {
      console.log('Welcome again ' + id);
      return true;
    } else {
      // console.log('ga ada cookie');
      return false;
    }
  },
};

export default Users;
