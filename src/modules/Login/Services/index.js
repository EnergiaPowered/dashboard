import axios from "axios";
import config from "../../../globals/config";

const login = async ({ email, password }) => {
  const response = await axios
    .post(`${config.HOST}login`, {
      email,
      password,
    });
  if (response.data.token) {
    localStorage.setItem("user", response.data.token);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
};
