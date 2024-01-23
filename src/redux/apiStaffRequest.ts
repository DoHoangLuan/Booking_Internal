import { useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  logininFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";
import { useNavigate } from "react-router-dom";
import { RegisterStaff, Staff } from "../types/AuthStaff";
import authAPI from "../apis/authStaff";
interface Login {
  staff: Staff;
  dispatch: ReturnType<typeof useDispatch>;
  navigate: ReturnType<typeof useNavigate>;
}
interface Register {
  staff: RegisterStaff;
  dispatch: ReturnType<typeof useDispatch>;
  navigate: ReturnType<typeof useNavigate>;
}

export const LoginStaff = async ({ staff, dispatch, navigate }: Login) => {
  dispatch(loginStart());
  try {
    const res = await authAPI.login(staff);
    const { accessToken } = res.data
    localStorage.setItem("accessToken", accessToken);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(logininFailed());
  }
};

export const registerStaff = async ({
  staff,
  dispatch,
  navigate,
}: Register) => {
  dispatch(registerStart());
  try {
    await authAPI.register(staff);
    dispatch(registerSuccess());
    navigate("/Login");
  } catch (err) {
    dispatch(logininFailed());
  }
};
