const CONFIG = {
  KEY: "6529f9ebeb927e1e32e150459e5d61fd",
  BASE_URL: "https://api.themoviedb.org/3/",
  BASE_IMAGE_URL: "https://image.tmdb.org/t/p/w500/",
  DEFAULT_LANGUAGE: "en-us",
  CACHE_NAME: "Movie-Catalogue-V4",
  // CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: "movie-catalogue-db",
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: "movies",
  WEB_SOCKET_SERVER: "wss://movies-feed.dicoding.dev",
};

export default CONFIG;
