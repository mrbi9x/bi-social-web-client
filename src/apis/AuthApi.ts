import axios from "axios";

export interface AuthRequest {
  loginname: string;
  password: string;
}
interface AuthResponse {
  token?: string;
  type?: string;
}

const authen = async (authReq: AuthRequest): Promise<AuthResponse> => {
  return axios.post("/auth/token", authReq);
};

async function getSecretUUID() {
  return axios.get("/api/uuid");
}

export { getSecretUUID, authen };
