import { AiOutlineEdit } from "react-icons/ai";

import { HiMiniPlusCircle } from "react-icons/hi2";
import { PiAddressBookLight } from "react-icons/pi";
import { BsCloudUpload } from "react-icons/bs";

import uploadImg from "../../assets/image-uploaded.png";

import PropTypes from "prop-types";

const BusinessDetails = ({ register }) => {
  return (
    <>
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
        <div>
          <label
            htmlFor="email"
            className="block text-md font-normal leading-6 text-white"
          >
            Business or Trading name
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="business-name"
              id="business-name"
              {...register("email", { required: true })}
              className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
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
              name="businessCountry"
              id="business-country"
              {...register("businessCountry", { required: true })}
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

      <div className="sm:col-span-3 ">
        <label
          htmlFor="business-state"
          className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
        >
          State/Province
        </label>
        <select
          id="business-state"
          name="businessState"
          {...register("businessState", { required: true })}
          className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
        >
          <option>Select preferred greeting</option>
          <option>Mr.</option>
          <option>Miss.</option>
          <option>Mrs.</option>
        </select>
      </div>

      <div className="sm:col-span-3 ">
        <label
          htmlFor="postal-code"
          className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
        >
          Postal Code
        </label>
        <select
          id="postal-code"
          name="postalCode"
          {...register("postalCode", { required: true })}
          className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
        >
          <option>Select postal code</option>
          <option>Mr.</option>
          <option>Miss.</option>
          <option>Mrs.</option>
        </select>
      </div>

      <div className="sm:col-span-3 ">
        <label
          htmlFor="business-category"
          className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
        >
          Business Category
        </label>
        <select
          id="business-category"
          name="businessCategory"
          {...register("businessCategory", { required: true })}
          className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
        >
          <option>Select postal code</option>
          <option>Mr.</option>
          <option>Miss.</option>
          <option>Mrs.</option>
        </select>
      </div>

      <div className="sm:col-span-3">
        <div>
          <label
            htmlFor="sub-category"
            className="block text-md font-normal leading-6 text-white"
          >
            Sub-category
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="sub-category"
              id="sub-category"
              {...register("firstName", { required: true })}
              className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div className="col-span-full lg:col-span-3 ">
        <label
          htmlFor="business-description"
          className="block text-md font-normal leading-6 text-white"
        >
          Business description
        </label>
        <div className="mt-2">
          <textarea
            type="text"
            name="businessDescription"
            rows={6}
            id="business-description"
            {...register("businessDescription", { required: true })}
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
              htmlFor="business-logo"
              className="absolute cursor-pointer rounded-md w-full h-full top-0 font-semibold focus-within:outline-none "
            >
              {/* <span>Upload a file</span> */}
              <input
                id="business-logo"
                name="businesslogo"
                type="file"
                {...register("businesslogo", { required: true })}
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
            <img src={uploadImg} alt="uploaded-image" />
          </div>
        </div>
      </div>

      <div className="sm:col-span-full w-full mt-10 sm:mt-6">
        <label
          htmlFor="keyword1"
          className="block text-md font-normal leading-6 text-white"
        >
          Sub-category
        </label>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <div className="mt-2">
              <input
                type="text"
                name="keyword1"
                id="keyword1"
                {...register("keyword1", { required: true })}
                placeholder="Keyword for Service 1"
                className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <div className="mt-2">
              <input
                type="text"
                name="keyword2"
                id="keyword2"
                {...register("keyword2", { required: true })}
                placeholder="Keyword for Service 2"
                className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <div className="mt-2">
              <input
                type="text"
                name="keyword3"
                id="keyword3"
                {...register("keyword3", { required: true })}
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
    </>
  );
};

BusinessDetails.propTypes = {
  register: PropTypes.func.isRequired,
};

export default BusinessDetails;
