export interface RegUser {
  regUser: {
    username: string;
    email: string;
    password: string;
    retypePassword: string;
  };
  isLoading: boolean;
  isMessage: string;
}