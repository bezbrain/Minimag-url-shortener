export interface RegUser {
  regUser: {
    username: string;
    email: string;
    password: string;
    retypePassword: string;
  };
  isLoading: boolean;
  isDisable: boolean;
  isMessage: string;
}

export interface LoginUser {
  loginUser: {
    email: string;
    password: string;
  };
  isLoading: boolean;
  isDisable: boolean;
}

export interface Logout {
  isLoading: boolean;
  isDisable: boolean;
}

export interface Link {
  urls: {
    originalUrl: string;
    fullShortUrl: string;
    domainType: string;
  };
  isLoading: boolean;
  isDisable: boolean;
  isCustomize: boolean;
}

export interface Faq {
  openIndex: null;
}
