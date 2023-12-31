import { AiOutlineEdit } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import PropTypes from "prop-types";

const Security = ({ register }) => {
  return (
    <>
      <div className=" col-span-full">
        <div className="flex items-center gap-5  text-[#F49F1C]">
          <GoLocation className="text-4xl" />
          <h2 className="text-2xl uppercase">Security</h2>
        </div>
      </div>

      <div className="sm:col-span-full">
        <label
          htmlFor="password"
          className="block text-md font-normal leading-6 text-white"
        >
          Password
        </label>
        <div className="flex gap-5 items-center mt-2">
          <div className="w-1/2">
            <input
              type="text"
              name="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="********"
              className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="w-1/2 flex gap-3 items-center">
            <h2 className="underline text-white">Change Password?</h2>
            <AiOutlineEdit className="text-[#F69E1E] text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

Security.propTypes = {
  register: PropTypes.func.isRequired,
};
export default Security;
