import { HiMiniPlusCircle } from "react-icons/hi2";
import { GoLocation } from "react-icons/go";
import SelectField from "../shared/inputs/SelectField";

const Location = () => {
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
            {/* <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Location 1
                </label>
                <select
                  id="countries"
                  className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select> */}
            <SelectField
              label="Location 1"
              id="countries"
              options={["Option A", "Option B", "Option C"]} // Additional props can be added here, e.g., value, onChange, etc.
            />
          </div>

          <div className="sm:col-span-3 ">
            <SelectField
              label="State/Territory"
              id="state"
              options={["Option A", "Option B", "Option C"]} // Additional props can be added here, e.g., value, onChange, etc.
            />
          </div>

          <div className="sm:col-span-3 ">
          <SelectField
              label="Region"
              id="region"
              options={["Option A", "Option B", "Option C"]} // Additional props can be added here, e.g., value, onChange, etc.
            />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Location 2
            </label>
            <select
              id="countries"
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
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              State/Territory
            </label>
            <select
              id="countries"
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
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Region
            </label>
            <select
              id="countries"
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
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Location 3
            </label>
            <select
              id="countries"
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
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              State/Territory
            </label>
            <select
              id="countries"
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
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
            >
              Region
            </label>
            <select
              id="countries"
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

export default Location;
