// import { HiOutlineLogout } from "react-icons/hi";
import { DASHBOARD_SIDEBAR_LINKS } from "../../../lib/constants";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import logo from "../../../assets/logo 1.svg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-[#0A163B]  py-5 h-full  flex flex-col justify-between relative">
      <div className="h-full flex flex-col gap-8 justify-center items-center">
        <div className="flex items-center justify-center w-full relative">
          <img src={logo} alt="" width={120} />
        </div>
        <div className="flex flex-col justify-between h-full items-center">
          <div className="flex flex-col  gap-6 h-full text-white">
            {DASHBOARD_SIDEBAR_LINKS.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className="flex gap-5 items-center font-light"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-6 right-0">
        <button className="text-white py-2 rounded-l-lg bg-gray-600">
          <MdOutlineKeyboardArrowLeft className="text-lg" />
        </button>
      </div>
    </div>
  );
}
