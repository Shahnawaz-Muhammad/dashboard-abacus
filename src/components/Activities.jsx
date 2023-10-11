import DoughnutChart from "../components/charts/doghnut";

const Activities = () => {
  return (
    <div className="w-full flex flex-col gap-8">
            <h3>Activities this week</h3>

            <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-between md:gap-8">
              <div className="flex flex-col justify-center items-center text-center gap-2 h-full">
                <DoughnutChart />
                <p className="px-5 leading-5">Job seeker visitors</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2 h-full">
                <DoughnutChart />
                <p className="px-5 leading-5">Employer visitors</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2 h-full">
                <DoughnutChart />
                <p className="px-5 leading-5">Service Provider visitors</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2 h-full">
                <DoughnutChart />
                <p className="px-5 leading-5">Fan visitors</p>
              </div>
            </div>
          </div>
  )
}

export default Activities