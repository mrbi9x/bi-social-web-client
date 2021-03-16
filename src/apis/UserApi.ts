import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "configs/axiosConfig";
import { RegisterRequest } from "./../payloads/requests/RegisterRequest";
export const registerNewUser = async (newUser: RegisterRequest) => {
  return axiosInstance
    .post("/public/users", newUser)
    .then((res: AxiosResponse) => res.data)
    .catch((aErr: AxiosError) => {
      console.log(aErr.toJSON());
      return Promise.reject(aErr.response);
    });
};
