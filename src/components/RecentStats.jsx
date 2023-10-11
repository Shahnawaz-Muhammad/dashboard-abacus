import { FaPeopleGroup } from "react-icons/fa6";

const RecentStats = () => {
  return (
    <div className="flex flex-col gap-10">
    <div className="w-full flex justify-between">
      <h3>Recent Stats</h3>
      <h3>7 Days</h3>
    </div>
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full p-2 rounded-xl bg-[#0A163B] flex gap-5">
          <div className="bg-gray-600 p-3 rounded-xl ">
            <FaPeopleGroup className="text-3xl" />
          </div>
          <div>
            <h3 className="text-[#B9C2CB]">Profile Views of you</h3>
            <p>3500</p>
          </div>
        </div>
        <div className="w-full p-2 rounded-xl bg-[#0A163B] flex gap-5">
          <div className="bg-gray-600 p-3 rounded-xl ">
            <FaPeopleGroup className="text-3xl" />
          </div>
          <div>
            <h3 className="text-[#B9C2CB]">Viewing time</h3>
            <p>0:18 minutes</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full p-2 rounded-xl bg-[#0A163B] flex gap-5">
          <div className="bg-gray-600 p-3 rounded-xl ">
            <FaPeopleGroup className="text-3xl" />
          </div>
          <div>
            <h3 className="text-[#B9C2CB]">Return visitors</h3>
            <p>1500</p>
          </div>
        </div>
        <div className="w-full p-2 rounded-xl bg-[#0A163B] flex gap-5">
          <div className="bg-gray-600 p-3 rounded-xl ">
            <FaPeopleGroup className="text-3xl" />
          </div>
          <div>
            <h3 className="text-[#B9C2CB]">New visitors</h3>
            <p>3500</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecentStats