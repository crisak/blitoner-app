export interface AuthCognito {
  username: string;
  pool: Pool;
  Session: null;
  client: Client;
  signInUserSession: SignInUserSession;
  authenticationFlowType: string;
  storage: Storage;
  keyPrefix: string;
  userDataKey: string;
  attributes: Attributes;
  preferredMFA: string;
}

export interface Attributes {
  sub: string;
  email_verified: boolean;
  "custom:name": string;
  "custom:agencyId": string;
  "custom:language": string;
  "custom:apiKey": string;
  email: string;
}

export interface Client {
  endpoint: string;
  fetchOptions: FetchOptions;
}

export interface FetchOptions {
}

export interface Pool {
  userPoolId: string;
  clientId: string;
  client: Client;
  advancedSecurityDataCollectionFlag: boolean;
  storage: Record<string, string>;
}

export interface SignInUserSession {
  idToken: IDToken;
  refreshToken: RefreshToken;
  accessToken: AccessToken;
  clockDrift: number;
}

export interface AccessToken {
  jwtToken: string;
  payload: AccessTokenPayload;
}

export interface AccessTokenPayload {
  sub: string;
  "cognito:groups": string[];
  iss: string;
  client_id: string;
  origin_jti: string;
  event_id: string;
  token_use: string;
  scope: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  username: string;
}

export interface IDToken {
  jwtToken: string;
  payload: IDTokenPayload;
}

export interface IDTokenPayload {
  sub: string;
  "cognito:groups": string[];
  email_verified: boolean;
  "custom:agencyId": string;
  iss: string;
  "cognito:username": string;
  origin_jti: string;
  aud: string;
  event_id: string;
  "custom:name": string;
  "custom:language": string;
  token_use: string;
  auth_time: number;
  "custom:apiKey": string;
  exp: number;
  iat: number;
  jti: string;
  email: string;
}

export interface RefreshToken {
  token: string;
}
