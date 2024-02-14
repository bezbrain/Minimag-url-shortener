import { LoginUser, RegUser } from "../management/types";

export const clearRegisterFields = (state: RegUser["regUser"]) => {
  state.username = "";
  state.email = "";
  state.password = "";
  state.retypePassword = "";
};

export const clearLoginFields = (state: LoginUser["loginUser"]) => {
  state.email = "";
  state.password = "";
};
