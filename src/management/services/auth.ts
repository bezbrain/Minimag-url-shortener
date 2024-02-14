import axios from "axios";
import config from "../../utils/config";
import { getAuthToken } from "../../utils/authToken";

export const registerUser = async (user: Object) => {
  const data = await axios.post(`${config.baseUrl}/register`, user);
  return data;
};

export const logUser = async (user: Object) => {
  const data = await axios.post(`${config.baseUrl}/login`, user);
  return data;
};

export const logoutUser = async () => {
  const token = getAuthToken();

  const data = await axios.get(`${config.baseUrl}/logout`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
