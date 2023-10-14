import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../header";
import { useState } from "react";
import Footer from "../footer";

export default function Layout() {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="w-full flex flex-col bg-[#010D25]">
      <div className="flex h-full w-full">
        <div
          className={`hidden lg:block w-1/5 flex-shrink-0 transition-all ease-in-out duration-200  lg:relative `}
        >
          <Sidebar handleSidebar={handleSidebar} />
        </div>

        
        <div className="flex-1 bg-[#010D25]">
          <div className="flex flex-col gap-6 min-h-screen w-full mx-auto px-4 md:px-8 py-5">
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
      <div className="bg-[#0A163B] w-full mt-14 mx-auto px-4 md:px-8 py-5">
        <Footer />
      </div>
    </div>
  );
}
