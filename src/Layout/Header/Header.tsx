import MyBasicMenu from "../../Component/MenuBasic/Menu";
import { CiMoneyCheck1 } from "react-icons/ci";
import { SiTeamviewer } from "react-icons/si";
import { IoHelpCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosDesktop } from "react-icons/io";
import { LuMousePointerClick } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import MyTabs from "../../Component/MyTabs/MyTabs";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Booking from "../../pages/Booking/Booking";
import Pending from "../../pages/Pending/Pending";
import Success from "../../pages/Success/Success";

const Header = () => {
  const menuSupport = [
    {
      icon: <IoHelpCircleOutline />,
      title: "Hướng dẫn sử dụng",
      className: "text-[#76a6f2] text-[22px]",
    },
    {
      icon: <SiTeamviewer />,
      title: "Team Viewer",
      className: "text-[#76a6f2] text-[22px]",
    },
    {
      icon: <IoIosDesktop />,
      title: "Ultra Viewer",
      className: "text-[#76a6f2] text-[22px]",
    },
    {
      icon: <LuMousePointerClick />,
      title: "Any Desk",
      className: "text-[#76a6f2] text-[22px]",
    },
  ];
  const MenuTabs = [
    {
      title: "Dashboard",
      children: <Dashboard />,
    },
    {
      title: "Đặt bàn",
      children: <Booking />,
    },
    {
      title: "Đơn đang chờ xác nhận",
      children: <Pending />,
    },
    {
      title: "Thành công",
      children: <Success />,
    },
  ];
  return (
    <div>
      <div className="h-[50px] ">
        <div className="flex flex-row justify-between items-center px-32">
          <div className="flex h-[40px] items-center gap-2 flex-1  ">
            <img
              src="/public/Logo/bitcoin.jpg"
              className="h-[35px] w-[35px] bg-cover"
            />
            <p className="font-thin ">JUCICY</p>
          </div>
          <div className="flex flex-1 justify-end gap-6">
            <div className="flex h-[40px] text-[16px] items-center gap-2">
              <CiMoneyCheck1 style={{ fontSize: "24px", color: "#24abb1" }} />
              <p> Vay vốn</p>
            </div>
            <div>
              <MyBasicMenu menuSupportList={menuSupport}>
                <p>Hỗ trợ</p>
              </MyBasicMenu>
            </div>
            <div>
              <MyBasicMenu menuSupportList={menuSupport}>
                <p>Thiết lập</p>
                <IoSettingsOutline />
              </MyBasicMenu>
            </div>
            <div>
              <MyBasicMenu menuSupportList={menuSupport}>
                <p>admin</p>
                <FaRegUserCircle />
              </MyBasicMenu>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MyTabs menuTab={MenuTabs}>

        </MyTabs>
      </div>
    </div>
  );
};

export default Header;
