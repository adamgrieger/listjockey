export interface AuthTokens {
  accessToken: string;
  expiresOn: number;
  refreshToken: string;
}

export interface RefreshedToken {
  accessToken: string;
  expiresOn: number;
}
