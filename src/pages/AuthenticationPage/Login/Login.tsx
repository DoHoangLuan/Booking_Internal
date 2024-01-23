import MyButton from "../../../Component/MyButtons/MyButtons";
import MyInput from "../../../Component/MyInput/Input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginStaff } from "../../../redux/apiStaffRequest";

interface loginStaff {
  email: string;
  password: string;
}

const intialStateStaff: loginStaff = {
  email: "",
  password: "",
};


const Login = () => {
  
  const [staff, setStaff] = useState(intialStateStaff);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newStaff = {
      email: staff.email,
      password: staff.password,
    };
    await LoginStaff({ staff: newStaff, dispatch, navigate });
  };
  return (
    <div>
      <div className="relative">
        <img
          src="https://cdn-app.kiotviet.vn/retailler/Content/img/login-bg-update.png"
          className=" h-screen bg-cover opacity-95"
        />
        <div className="absolute h-[400px] w-[600px] top-1/2 left-[300px] transform  -translate-y-1/2 bg-white  z-20 rounded-[10px]">
          <div>
            <div className="flex flex-col justify-center items-center gap-4 mt-3 ">
              <div className="flex flex-row gap-4">
                <img
                  src="/public/Logo/bitcoin.jpg"
                  className="h-[50px] w-[50px] bg-cover "
                />
                <p className="leading-[50px] font-semibold text-[#24abb1]">
                  JUCICY
                </p>
              </div>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <MyInput
                  label="Email"
                  name="email"
                  type="text"
                  variant="standard"
                  sx={{ height: "60px", width: "400px" }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setStaff({ ...staff, email: e.target.value })
                  }
                  value={staff.email}
                  focused
                  helperText
                />
                <MyInput
                  label="Mật khẩu"
                  name="password"
                  type="password"
                  sx={{ height: "60px", width: "400px" }}
                  variant="standard"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setStaff({ ...staff, password: e.target.value })
                  }
                  value={staff.password}
                />
                <MyButton type="submit">Đăng nhập</MyButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
