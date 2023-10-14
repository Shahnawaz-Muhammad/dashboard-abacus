import statsImg from "../../assets/stats-info.png";
import Activities from "../../components/Activities";
import RecentStats from "../../components/RecentStats";
import { BsEyeFill } from "react-icons/bs";
import { AreaChart } from "../../components/charts/areachart";
// import { PolarChart } from "../../components/charts/polarchart";
// import DoughnutChart from "../../components/charts/doghnut";
import ProfileViewed from "../../components/charts/doghnut/ProfileViewed";
import { ViewsChart } from "../../components/charts/activitycharts/Views";
// import SelectField from "../../components/shared/inputs/SelectField";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      {/* <div className="w-full grid gap-10">
        <div className="h-full md:w-1/2 lg:w-[60%]  flex-initial  text-white">
          <div className="flex flex-col gap-10">
            <RecentStats />
          </div>

            <Activities />
        </div>
        <div className="h-full w-full md:w-1/2 lg:w-[40%] flex-none lg:p-5">
          <img
            src={statsImg}
            alt="stats info image"
            className="w-full h-full "
          />
        </div>
      </div> */}
      <div className="grid grid-cols-5 grid-flow-col gap-10">
        <div className="row-span-2 lg:col-span-2 xl:col-span-3 text-white">
          <RecentStats />
        </div>
        <div className=" col-span-3 text-white">
          <div className="flex flex-col gap-10">
            <Activities />
          </div>
        </div>
        <div className="row-span-3 col-span-2">
          <img
            src={statsImg}
            alt="stats info image"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="w-full">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="text-sm">Project Views</p>
          </div>
          <div className="bg-[#5AB177] w-full h-full rounded-xl p-2">
            <div className="flex justify-between">
              <div className="flex flex-col text-white">
                <h2 className="text-2xl">1500 </h2>{" "}
                <p>Views of open projects</p>
              </div>
              <h2>...</h2>
            </div>
            <ViewsChart />
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="text-sm">Job advertisement views</p>
            <BsEyeFill className="text-[#F69E1E] text-xl" />
          </div>
          <div className="bg-[#FF6666] p-3 rounded-xl h-full">
            <div className="flex flex-col text-white">
              <h2 className="text-2xl">1500 </h2> <p>Views of open projects</p>
            </div>

            <ViewsChart />
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="text-sm">Applications received</p>
            <BsEyeFill className="text-[#F69E1E] text-xl" />
          </div>
          <div className="h-full bg-[#F3C130] p-3 rounded-xl">
            <div className="flex flex-col text-white">
              <h2 className="text-2xl">1500 </h2> <p>Views of open projects</p>
            </div>
            <ViewsChart />
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="text-sm">Expressions of Interest received</p>
            <BsEyeFill className="text-[#F69E1E] text-xl" />
          </div>
          <div className="h-full bg-[#8A70D6] p-3 rounded-xl">
            <div className="flex justify-between">
              <div className="flex flex-col text-white">
                <h2 className="text-2xl">1500 </h2>{" "}
                <p>Views of open projects</p>
              </div>
              <h2>...</h2>
            </div>
            <ViewsChart />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="max-h-[25rem]  w-full xl:w-[60%]  flex-initial  text-white">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="">Track your Recruitment activities</p>
          </div>
          <div className="w-full rounded-xl bg-[#0A163B] p-4">
            <div className="w-full flex justify-between items-center">
              <h2 className="w-full">Select Month</h2>
              <div className="w-32">
                <select
                  id="countries"
                  className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                >
                  <option>Jan-Mar</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>
            <AreaChart />
          </div>
        </div>
        <div className="w-full h-full xl:w-[40%] text-white">
          <div className="flex justify-between py-2 px-2 text-white">
            <p className="">Your profile viewed from</p>
          </div>
          <div className="w-full h-full  rounded-xl bg-[#0A163B] p-4">
            <ProfileViewed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
