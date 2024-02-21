import axios from "axios";
import { urlConfig } from "../../utils/config";
import { getAuthToken } from "../../utils/authToken";

export const mainLink = async (link: any) => {
  const token = getAuthToken();
  const data = await axios.post(`${urlConfig.urlBaseUrl}/createUrl`, link, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const mainCusLink = async (links: any) => {
  const newLinks = {
    originalUrl: links.originalUrl,
    shortUrl: links.fullShortUrl,
  };
  const token = getAuthToken();
  const data = await axios.post(`${urlConfig.urlBaseUrl}/customUrl`, newLinks, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
