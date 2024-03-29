export const setAuthToken = (authToken: string) => {
  return localStorage.setItem("authToken", authToken);
};

export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const removeAuthToken = () => {
  return localStorage.removeItem("authToken");
};
