import { AxiosError, AxiosResponse } from "axios";
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

const authen = async (
  authReq: AuthRequest
): Promise<AxiosResponse<AuthResponse>> => {
  return axiosInstance.post("/public/auth/token", authReq, {
    withCredentials: true,
  });
};

const getSecretUUID = async () => {
  return axiosInstance.get("/api/uuid");
};

const retrieveTokenWithCookie = async (): Promise<
  AxiosResponse<AuthResponse>
> => {
  return axiosInstance
    .get("/public/auth/refreshToken", {
      withCredentials: true,
    })
    .then((res: AxiosResponse) => res.data)
    .catch((err: AxiosError) => Promise.reject(err.response?.data.message));
};

export { getSecretUUID, authen, retrieveTokenWithCookie };
