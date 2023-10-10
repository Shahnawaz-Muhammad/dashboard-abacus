import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../header";

export default function Layout() {
  return (
    <div className="flex w-full h-auto">
      <Sidebar />
      <div className="flex-1 bg-[#010D25]">
        <div className="flex w-full flex-col gap-6 min-h-screen max-w-screen-xl px-8 py-5">
          <Header />

          <Outlet />
        </div>
      </div>
    </div>
  );
}
