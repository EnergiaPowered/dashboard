const configs = {
  HOST:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/api"
      : "https://handsome-worm-woolens.cyclic.app/api",
  FRONT_HOST:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : "https://energia-powered.com",
};

export default configs;
