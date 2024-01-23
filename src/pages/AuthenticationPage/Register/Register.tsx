import { useState } from "react";
import MyInput from "./../../../Component/MyInput/Input";
import MyButton from "./../../../Component/MyButtons/MyButtons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerStart } from "../../../redux/authSlice";
import { registerStaff } from "../../../redux/apiStaffRequest";
import { RootState } from "../../../types/AuthStaff";

interface RegisterStaff {
  email: string;
  staffname: string;
  password: string;
  role:string
}

const intialStateStaff: RegisterStaff = {
  email: "",
  staffname: "",
  password: "",
  role: ""
};
const Register = () => {
  const staffRedux = useSelector((state : RootState) => state.authStaff.login.currentStaff)

  const [staff, setStaff] = useState(intialStateStaff);
  const admin =  staffRedux.role

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registerNewStaff = {
      email: staff.email,
      staffname: staff.staffname,
      password: staff.password,
      role: "STAFF"
    };
    await registerStaff({ staff: registerNewStaff, dispatch, navigate });
  };
  let content;
  if (admin) {
    content = (
      <div className=" flex justify-center items-center py-20">
        <div className="flex flex-row w-[1000px] h-[800px] bg-white justify-around ">
          <div className="flex flex-col gap-10 flex-1 justify-center items-center ">
            <div className="text-[24px] font-mono">Đăng kí nhà hàng </div>
            <form className="flex flex-col gap-10">
              <MyInput
                label="Tên nhà hàng"
                name="Tên nhà hàng"
                type="text"
                variant="standard"
              />
              <MyInput
                label="Email"
                name="Email"
                type="Email"
                variant="standard"
              />
              <MyInput
                label="Password"
                name="Password"
                type="Password"
                variant="standard"
              />
              <MyInput
                label="Re-Password"
                name="Password"
                type="Password"
                variant="standard"
              />
              <MyButton className="w-[300px]" type="submit">
                Đăng kí
              </MyButton>
            </form>
          </div>
          <div className="flex flex-1">
            <img
              src="/public/Logo/sale.jpg"
              className="h-full w-full bg-cover"
            />
          </div>
        </div>
      </div>
    );
  } else if (admin == "Restaurant") {
    content = (
      <div className=" flex justify-center items-center py-20">
        <div className="flex flex-row w-[1000px] h-[800px] bg-white justify-around ">
          <div className="flex flex-col gap-10 flex-1 justify-center items-center ">
            <div className="text-[24px] font-mono">Đăng kí nhân viên </div>
            <form className="flex flex-col  gap-10   " onSubmit={handleSubmit}>
              <MyInput
                label="Email"
                name="Email"
                type="Email"
                variant="standard"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setStaff({ ...staff, email: e.target.value })
                }
                value={staff.email}
              />
              <MyInput
                label="StaffName"
                name="StaffName"
                type="text"
                variant="standard"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setStaff({ ...staff, staffname: e.target.value })
                }
                value={staff.staffname}
              />
              <MyInput
                label="Password"
                name="Password"
                type="Password"
                variant="standard"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setStaff({ ...staff, password: e.target.value })
                }
                value={staff.password}
              />
              <MyButton className="w-[300px]" type="submit">
                Đăng kí
              </MyButton>
            </form>
          </div>
          <div className="flex flex-1">
            <img
              src="/public/Logo/sale.jpg"
              className="h-full w-full bg-cover"
            />
          </div>
        </div>
      </div>
    );
  }
  return content;
};

export default Register;
