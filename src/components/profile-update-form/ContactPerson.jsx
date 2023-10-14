import { AiOutlineEdit } from "react-icons/ai";

import { PiAddressBookLight } from "react-icons/pi";
const ContactPerson = () => {
  return (
    <>
      <div className="mt-10 col-span-full">
        <div className="flex items-center gap-5  text-[#F49F1C]">
          <PiAddressBookLight className="text-4xl" />
          <h2 className="text-2xl">CONTACT PERSON</h2>
        </div>
      </div>

      <div className="sm:col-span-3">
        <div>
          <label
            htmlFor="first-name"
            className="block text-md font-normal leading-6 text-white"
          >
            First name/s
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="firstName"
              id="first-name"
              className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-3">
        <div>
          <label
            htmlFor="family-name"
            className="block text-md font-normal leading-6 text-white"
          >
            Family name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="familyName"
              id="family-name"
              className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-3 ">
        <label
          htmlFor="preferred-greeting"
          className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
        >
          Preferred Greeting
        </label>
        <select
          id="preferred-greeting"
          className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
        >
          <option>Select preferred greeting</option>
          <option>Mr.</option>
          <option>Miss.</option>
          <option>Mrs.</option>
        </select>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="job-title"
          className="block text-md font-normal leading-6 text-white"
        >
          Job title in your business
        </label>
        <div className="mt-2 w-full flex flex-col sm:flex-row justify-center gap-5">
          <div className="relative w-full">
            <input
              type="text"
              name="jobTitle"
              id="job-title"
              className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            <AiOutlineEdit className="text-white absolute top-3 right-3 text-xl" />
          </div>
        </div>
      </div>

      <div className="sm:col-span-3">
      <div>
          <label
            htmlFor="email"
            className="block text-md font-normal leading-6 text-white"
          >
            Email Address
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
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
    </>
  );
};

export default ContactPerson;
