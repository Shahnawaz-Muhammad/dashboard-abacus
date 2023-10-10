import BarChart from "../../components/charts/barchart";
// import PieChart from "../../components/charts/piechart";
import {  useState } from "react";
// import Complaint from "../../components/complaint";
// import { LineChart } from "../../components/charts/linechart";

const Dashboard = () => {
  const [enabled] = useState(false)
  return (
    <div className="relative">
      <div className="  w-full flex flex-col lg:flex-row gap-5">
        <div className="w-full ">
          <div className="flex flex-col gap-3 col-span-3 mt-3 ">
            <div className="w-full flex flex-col lg:flex-row gap-5 ">
              <div
                className={`${
                  enabled ? "bg-gray-300" : "bg-white"
                } animate-slide-left p-2 rounded-lg shadow-lg w-full lg:w-1/2`}
              >
                <BarChart />
              </div>
              <div
                className={`${
                  enabled ? "bg-gray-300" : "bg-white"
                } animate-slide-right p-2 rounded-lg shadow-lg w-full lg:w-1/2`}
              >
                {/* <PieChart /> */}
              </div>
            </div>
            <div
              className={`${
                enabled ? "bg-gray-300" : "bg-white"
              } animate-slide-top p-2 rounded-lg shadow-lg w-full `}
            >
              {/* <LineChart enabled={enabled} /> */}
            </div>
            <div
              className={`${
                enabled ? "bg-gray-300" : "bg-white"
              } animate-slide-top p-2 rounded-lg shadow-lg w-full `}
            >
              {/* <Complaint /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
