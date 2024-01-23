import axiosInstance from './axiosIntance';
import { Staff } from './../types/AuthStaff.d';
import { RegisterStaff } from './../types/AuthStaff.d';


const authAPI = {
  login: (values : Staff) => axiosInstance.post("/auth/login-staff", values),
  register: (values: RegisterStaff) => axiosInstance.post("/auth/register-staff", values),
  authInfo: () => axiosInstance.get("/auth/me"),
};

export default authAPI;

