import { RegUser } from "../management/types";

const clearAuthFields = (state: RegUser["regUser"]) => {
  state.username = "";
  state.email = "";
  state.password = "";
  state.retypePassword = "";
};

export default clearAuthFields;
