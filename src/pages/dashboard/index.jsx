import statsImg from "../../assets/stats-info.png";
import Activities from "../../components/Activities";
import RecentStats from "../../components/RecentStats";
import { BsEyeFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10">
        <div className="h-full md:w-1/2 lg:w-[60%]  flex-initial  text-white">
          <div className="flex flex-col gap-10">
            <RecentStats />

            <Activities />
          </div>
        </div>
        <div className="h-full w-full md:w-1/2 lg:w-[40%] flex-1 lg:p-5">
          <img
            src={statsImg}
            alt="stats info image"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div className="w-full">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="text-sm">Project Views</p>
          </div>
          <div className="bg-[#5AB177] p-3 rounded-xl"></div>
        </div>
        <div className="w-full">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="text-sm">Job advertisement views</p>
            <BsEyeFill className="text-[#F69E1E] text-xl" />
          </div>
          <div className="bg-[#FF6666] p-3 rounded-xl"></div>
        </div>
        <div className="w-full">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="text-sm">Applications received</p>
            <BsEyeFill className="text-[#F69E1E] text-xl" />
          </div>
          <div className="bg-[#F3C130] p-3 rounded-xl"></div>
        </div>
        <div className="w-full">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="text-sm">Expressions of Interest received</p>
            <BsEyeFill className="text-[#F69E1E] text-xl" />
          </div>
          <div className="bg-[#8A70D6] p-3 rounded-xl"></div>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="h-full w-[60%]  flex-initial  text-white">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="">Track your Recruitment activities</p>
          </div>
          <div className="w-full rounded-xl bg-[#0A163B] p-4">hi</div>
        </div>
        <div className="w-[40%] text-white">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="">Your profile viewed from</p>
          </div>
          <div className="w-full rounded-xl bg-[#0A163B] p-4">hi</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
