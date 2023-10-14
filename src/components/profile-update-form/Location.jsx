import { HiMiniPlusCircle } from "react-icons/hi2";
import { GoLocation } from "react-icons/go";
import PropTypes from "prop-types";

const Location = ({ register }) => {
  return (
    <>
      <div className=" col-span-full">
        <div className="flex items-center gap-5  text-[#F49F1C]">
          <GoLocation className="text-4xl" />
          <h2 className="text-2xl">LOCATIONS YOUR SERVICES ARE AVAILABLE</h2>
        </div>
      </div>
      <div className="col-span-full">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <label
              htmlFor="location1"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Location 1
            </label>
            <select
              id="location1"
              name="location1"
              {...register("location1", { required: true })}
              className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>

          <div className="sm:col-span-3 ">
            <label
              htmlFor="state3"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              State/teritory
            </label>
            <select
              id="state3"
              name="state3"
              {...register("state3", { required: true })}
              className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>

          <div className="sm:col-span-3 ">
            <label
              htmlFor="region3"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              State/teritory
            </label>
            <select
              id="region2"
              name="region2"
              {...register("region2", { required: true })}
              className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <label
              htmlFor="location2"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Location 2
            </label>
            <select
              id="location2"
              name="location2"
              {...register("location2", { required: true })}
              className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>

          <div className="sm:col-span-3 ">
            <label
              htmlFor="state1"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              State/teritory
            </label>
            <select
              id="state2"
              name="state2"
              {...register("state2", { required: true })}
              className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>

          <div className="sm:col-span-3 ">
            <label
              htmlFor="region3"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              State/teritory
            </label>
            <select
              id="region3"
              name="region3"
              {...register("region3", { required: true })}
              className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <label
              htmlFor="location3"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Location 3
            </label>
            <select
              id="location3"
              name="location3"
              {...register("location3", { required: true })}
              className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>

          <div className="sm:col-span-3 ">
            <label
              htmlFor="state1"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              State/teritory
            </label>
            <select
              id="state2"
              name="state2"
              {...register("state2", { required: true })}
              className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>

          <div className="sm:col-span-3 ">
            <label
              htmlFor="region2"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              State/teritory
            </label>
            <select
              id="region1"
              name="region1"
              {...register("region1", { required: true })}
              className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
          <div className="sm:col-span-full">
            <div className="flex gap-3 items-center text-[#F69E1E]">
              <HiMiniPlusCircle className="text-2xl" />
              <h2 className="uppercase">Add another Location</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Location.propTypes = {
  register: PropTypes.func.isRequired,
};
export default Location;
