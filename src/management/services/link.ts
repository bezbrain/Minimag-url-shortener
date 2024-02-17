import axios from "axios";
import { urlConfig } from "../../utils/config";
import { getAuthToken } from "../../utils/authToken";

export const mainLink = async (link: Object) => {
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
  console.log(links);
  const newLinks = {
    originalUrl: links.originalUrl,
    customizeUrl: links.fullShortUrl,
  };
  const token = getAuthToken();
  const data = await axios.post(
    `${urlConfig.urlBaseUrl}/customizeUrl`,
    newLinks,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
