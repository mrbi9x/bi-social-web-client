import axios from "axios";

export interface AuthRequest {
  username: string;
  password: string;
}
export interface AuthResponse {
  type?: string;
  accessToken?: string;
  refreshToken?: string;
}
//
// axios.interceptors.response.use(
//   (res) => res.data,
//   (err) => console.log(err)
// );

const authen = async (authReq: AuthRequest): Promise<AuthResponse> => {
  return axios.post("/public/auth/token", authReq);
};

const getSecretUUID = async () => {
  return axios.get("/api/uuid");
};

const retrieveTokenWithCookie = async (): Promise<AuthResponse> => {
  return axios.get("/public/auth/refreshToken");
};

export { getSecretUUID, authen, retrieveTokenWithCookie };
