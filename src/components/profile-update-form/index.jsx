import { AiOutlineEdit } from "react-icons/ai";
import { PiAddressBookLight } from "react-icons/pi";
import { BsCloudUpload, BsArrowUpCircle } from "react-icons/bs";
import { AiOutlineFileJpg } from "react-icons/ai";
import {
  HiMiniPlusCircle,
  HiMiniArrowPathRoundedSquare,
} from "react-icons/hi2";
import { GoLocation } from "react-icons/go";
import { RiVipCrownLine, RiVerifiedBadgeFill } from "react-icons/ri";
// import { MdOutlineVerified } from "react-icons/md";

import uplaodImg from "../../assets/image-uploaded.png";
import Location from "../../components/profile-update-form/Location";
import { Link } from "react-router-dom";
import InputField from "../shared/inputs/InputField";

const Form = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="col-span-full">
        <label
          htmlFor="first-name"
          className="block text-md font-normal leading-6 text-white"
        >
          Username
        </label>
        <div className="mt-2 w-full flex flex-col sm:flex-row justify-center gap-5">
          <div className="relative w-full">
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            <AiOutlineEdit className="text-white absolute top-3 right-3 text-xl" />
          </div>
          <div className="flex gap-5 items-center w-full">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            {/* <MdOutlineVerified className="text-xl text-white"/> */}
            <div className="flex gap-5 items-center">
              <RiVerifiedBadgeFill className="text-xl fill-green-500 text-white" />
              <p className="text-white">Verified Account</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 col-span-full">
        <div className="flex items-center gap-5  text-[#F49F1C]">
          <PiAddressBookLight className="text-4xl" />
          <h2 className="text-2xl">CONTACT PERSON</h2>
        </div>
      </div>

      <div className="sm:col-span-3">
        <InputField label="First name/s" name="first-name" id="first-name" />
      </div>

      <div className="sm:col-span-3">
        <InputField label="Family Name" name="family-name" id="family-name" />
      </div>

      <div className="sm:col-span-3">
        <InputField
          label="Preferred Greeting"
          name="preferred-greeting"
          id="preferred-greeting"
        />
      </div>

      <div className="sm:col-span-3">
        <InputField
          label="Job title in your business"
          name="job-title"
          id="job-title"
        />
      </div>

      <div className="sm:col-span-3">
        <InputField label="Email" name="email" id="email" />
      </div>

      <div className="sm:col-span-3 relative">
        <div>
          <label
           htmlFor="business-country"
            className="block text-md font-medium leading-6 text-gray-100"
          >
            Country your business is located
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="business-country"
              id="business-country"
              className="block w-full rounded-lg border py-2 pr-7 pl-24 bg-transparent  border-gray-400 text-gray-100 focus:outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
            <div className="absolute inset-y-0 left-0 flex items-center ">
              <select
                id="country-code"
                name="country-code"
                className="h-full rounded-md border-0 bg-transparent focus:outline-none py-0 pl-2 pr-7 text-gray-400 sm:text-sm"
              >
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div>
            <div className="absolute inset-y-0 right-3 flex items-center">
              <AiOutlineEdit className="text-white text-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full w-full flex flex-col md:flex-row md:gap-16">
        <div className="h-full w-full xl:w-[20%] ">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-white"
          >
            Profile image
          </label>
          <div className="mt-3 flex relative justify-center w-60 h-full rounded-lg border border-dashed border-gray-400 px-6 py-5">
            <label
              htmlFor="file-upload"
              className="absolute cursor-pointer rounded-md w-full h-full top-0 font-semibold focus-within:outline-none "
            >
              {/* <span>Upload a file</span> */}
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
            <div className="text-center">
              <BsCloudUpload className="w-10 h-10 mx-auto text-[#F49F1C]" />
              <p className="pl-1 text-sm text-white">Drop your files here</p>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <p className="text-xs leading-5 text-gray-600">
                  .pdf .tiff .jpg (2.5 MB maximum file size) 502 pixels x 502
                  pixels
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[45%] flex flex-col justify-center">
          <div className="mt-20 flex flex-col gap-5">
            <h1 className="text-2xl text-white">Uploading ...</h1>
            <div className="w-full flex gap-5">
              <AiOutlineFileJpg className="font-light text-6xl text-[#F49F1C]" />
              <div className="w-full flex flex-col justify-between text-white ">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-md">image.jpg</h3>
                  <div className="h-4 w-4 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer">
                    <h2 className="text-[.6rem] ">x</h2>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2 ">
                  <div
                    className="bg-[#F49F1C] h-2 rounded-full "
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 col-span-full">
        <div className="flex items-center gap-5  text-[#F49F1C]">
          <PiAddressBookLight className="text-4xl" />
          <h2 className="text-2xl">BUSINESS DETAILS</h2>
        </div>
        <h2 className="text-lg text-white my-3">
          If you are unregistered give your service a trading name
        </h2>
      </div>

      <div className="sm:col-span-3">
        <InputField
          label="Business or Trading name"
          name="business-name"
          id="business-name"
        />
      </div>

      <div className="sm:col-span-3 relative">
        <div>
          <label
           htmlFor="price"
            className="block text-md font-medium leading-6 text-gray-100"
          >
            Country your business is located
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="business-country"
              id="business-country"
              className="block w-full rounded-lg border py-2.5 pr-7 pl-24 bg-transparent  border-gray-400 text-gray-100 focus:outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
            <div className="absolute inset-y-0 left-0 flex items-center ">
              <select
                id="business-country-options"
                name="business-country-options"
                className="h-full rounded-md border-0 bg-transparent focus:outline-none py-0 pl-2 pr-7 text-gray-400 sm:text-sm"
              >
                <option>Select</option>
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div>
            <div className="absolute inset-y-0 right-3 flex items-center">
              <AiOutlineEdit className="text-white text-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:col-span-3">
        <InputField
          label="State/Province"
          name="business-state"
          id="business-state"
        />
      </div>

      <div className="sm:col-span-3">
        <InputField label="Postal code" name="postal-code" id="postal-code" />
      </div>

      <div className="sm:col-span-3">
        <InputField
          label="Business Category"
          name="business-category"
          id="business-category"
        />
      </div>

      <div className="sm:col-span-3">
        <InputField
          label="Sub-category"
          name="sub-category"
          id="sub-category"
        />
      </div>

      <div className="col-span-full lg:col-span-3 ">
        <label
          htmlFor="first-name"
          className="block text-md font-normal leading-6 text-white"
        >
          Business description
        </label>
        <div className="mt-2">
          <textarea
            type="text"
            name="first-name"
            rows={6}
            id="first-name"
            className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="col-span-full lg:col-span-3 ">
        <label
          htmlFor="first-name"
          className="block text-md font-normal leading-6 text-white"
        >
          Business logo
        </label>
        <div className="flex h-full xl:h-40 gap-10">
          <div className="mt-2 flex relative justify-center w-1/2 h-full rounded-lg border border-dashed border-gray-400 px-6 py-5">
            <label
              htmlFor="file-upload"
              className="absolute cursor-pointer rounded-md w-full h-full top-0 font-semibold focus-within:outline-none "
            >
              {/* <span>Upload a file</span> */}
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
            <div className="text-center">
              <BsCloudUpload className="w-10 h-10 mx-auto text-[#F49F1C]" />
              <p className="pl-1 text-sm text-white">Drop your files here</p>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <p className="text-xs leading-5 text-gray-600">
                  .pdf .tiff .jpg (2.5 MB maximum file size) 502 pixels x 502
                  pixels
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2 flex relative justify-center items-center w-1/2 h-full rounded-lg border border-dashed border-gray-400 px-6 py-5">
            <img src={uplaodImg} alt="uploaded-image" />
          </div>
        </div>
      </div>

      <div className="sm:col-span-full w-full mt-10 sm:mt-6">
        <label
          htmlFor="first-name"
          className="block text-md font-normal leading-6 text-white"
        >
          Sub-category
        </label>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Keyword for Service 1"
                className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Keyword for Service 2"
                className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Keyword for Service 3"
                className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-full">
            <div className="flex gap-3 items-center text-[#F69E1E]">
              <HiMiniPlusCircle className="text-2xl" />
              <h2 className="uppercase">Add another keyword</h2>
            </div>
          </div>
        </div>
      </div>

      <Location />

      <div className=" col-span-full">
        <div className="flex items-center gap-5  text-[#F49F1C]">
          <GoLocation className="text-4xl" />
          <h2 className="text-2xl uppercase">Security</h2>
        </div>
      </div>

      <div className="sm:col-span-full">
        <label
          htmlFor="first-name"
          className="block text-md font-normal leading-6 text-white"
        >
          Business category
        </label>
        <div className="flex gap-5 items-center mt-2">
          <div className="w-1/2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Keyword for Service 1"
              className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="w-1/2 flex gap-3 items-center">
            <h2 className="underline text-white">Change Password?</h2>
            <AiOutlineEdit className="text-[#F69E1E] text-2xl" />
          </div>
        </div>
      </div>

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

      <div className="sm:col-span-full w-full mt-10 sm:mt-6 flex flex-col md:flex-row gap-5 md:gap-10">
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
      <div className="sm:col-span-full w-full mt-10 sm:mt-6 flex justify-end gap-5 md:gap-10">
        <button className="bg-gray-200 rounded-full px-10 py-3">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Form;
