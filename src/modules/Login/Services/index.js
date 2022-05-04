import axios from "axios";
import config from "../../../globals/config";

export const login = async ({ email, password }) => {
  const response = await axios.post(`${config.HOST}/login/admin`, {
    email,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("user", response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};
