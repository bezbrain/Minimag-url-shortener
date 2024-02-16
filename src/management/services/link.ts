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
