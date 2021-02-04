import axiosInstance from "configs/axiosConfig";

export interface AuthRequest {
  username: string;
  password: string;
}
export interface AuthResponse {
  type?: string;
  accessToken?: string;
  refreshToken?: string;
}

const authen = async (authReq: AuthRequest): Promise<AuthResponse> => {
  return axiosInstance.post("/public/auth/token", authReq);
};

const getSecretUUID = async () => {
  return axiosInstance.get("/api/uuid");
};

const retrieveTokenWithCookie = async (): Promise<AuthResponse> => {
  return axiosInstance.get("/public/auth/refreshToken");
};

export { getSecretUUID, authen, retrieveTokenWithCookie };
