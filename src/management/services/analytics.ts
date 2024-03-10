import axios from "axios";
import { getAuthToken } from "../../utils/authToken";
import { config } from "../../utils/config";

export const getAnalytics = async () => {
  const token = getAuthToken();

  const data = await axios.get(`${config.baseUrl}/analytics`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getCusAnalytics = async () => {
  const token = getAuthToken();

  const data = await axios.get(`${config.baseUrl}/customAnalytics`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
