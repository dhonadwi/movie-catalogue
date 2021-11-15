const Detail = {
  async render() {
    return `
    <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const url = window.location.hash;
    const id = url.split("/");
    console.log(id[1]);
  },
};

export default Detail;
