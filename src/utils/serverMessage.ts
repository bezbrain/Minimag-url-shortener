export const serverError = (payload: any) => {
  if (payload.message === "Network Error") {
    return `${payload.message}. Please, check your network and try again!`;
  } else {
    return payload.response.data.message;
  }
};
