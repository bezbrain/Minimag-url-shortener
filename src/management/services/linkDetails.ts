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

export const getAllCusUrl = async () => {
  const token = getAuthToken();

  const data = await axios.get(`${config.baseUrl}/allCusLinks`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteShortUrl = async (id: string) => {
  const token = getAuthToken();

  const data = await axios.delete(`${config.baseUrl}/singleLink/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteCustomUrl = async (id: string) => {
  const token = getAuthToken();

  const data = await axios.delete(`${config.baseUrl}/singleCusLink/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
