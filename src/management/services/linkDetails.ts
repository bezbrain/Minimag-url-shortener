import axios from "axios";
import { config } from "../../utils/config";
import { getAuthToken } from "../../utils/authToken";

export const getAllUrl = async () => {
  const token = getAuthToken();

  const data = await axios.get(`${config.baseUrl}/allLinks`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
