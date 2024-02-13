import axios from "axios";
import config from "../../utils/config";

export const registerUser = async (user: Object) => {
  const { data } = await axios.post(`${config.baseUrl}/register`, user);
  return data;
};
