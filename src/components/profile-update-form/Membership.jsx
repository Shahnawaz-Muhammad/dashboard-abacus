import { AiOutlineEdit } from 'react-icons/ai'
import { BsArrowUpCircle } from 'react-icons/bs'
import { HiMiniArrowPathRoundedSquare } from 'react-icons/hi2'
import { RiVipCrownLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Membership = () => {
  return (
    <>
        <div className=" col-span-full">
          <div className="flex items-center gap-5  text-[#F49F1C]">
            <RiVipCrownLine className="text-4xl" />
            <h2 className="text-2xl uppercase">MEMBERSHIP</h2>
          </div>
        </div>

        <div className="sm:col-span-5">
          <div className="w-full h-full flex gap-2 text-white items-center flex-wrap">
            <h2>Member since January 2023</h2>
            <div className="h-full border border-dashed border-white w-[1px]"></div>
            <h2>Account type: Employer</h2>
            <AiOutlineEdit className="text-gray-500 text-2xl " />
          </div>
        </div>

        <div className="sm:col-span-full w-full mt-10 sm:mt-6 flex flex-col lg:flex-row gap-5 md:gap-10">
          <div className="flex flex-row gap-5 md:gap-10">
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Bronze
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  "
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Silver
              </label>
              <HiMiniArrowPathRoundedSquare className="text-2xl ml-2 text-[#F69E1E]" />
            </div>
          </div>
          <div className="flex flex-row gap-5 md:gap-10">
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  "
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Gold
              </label>
              <HiMiniArrowPathRoundedSquare className="text-2xl ml-2 text-[#F69E1E]" />
            </div>
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  "
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Diamond
              </label>
              <HiMiniArrowPathRoundedSquare className="text-2xl ml-2 text-[#F69E1E]" />
            </div>
          </div>
          <div className="flex items-center gap-5 text-[#F69E1E]">
            <BsArrowUpCircle className="text-2xl" />
            <Link to="" className="underline">
              UPGRADE MY MEMBERSHIP
            </Link>
          </div>
        </div>
    </>
  )
}

export default Membership