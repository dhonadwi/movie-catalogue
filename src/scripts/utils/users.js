const Users = {
  location: async () => {
    const geoLocation = navigator.geolocation;
    const cek = await geoLocation.getCurrentPosition((position) => {
      return `${position.coords.latitude},${position.coords.longitude}`;
    });
  },
};

export default Users;
