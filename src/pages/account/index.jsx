import { BsPerson } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai"
import { PiAddressBookLight } from "react-icons/pi"
import { BsCloudUpload } from "react-icons/bs"

const Account = () => {
  return (
    <div className="md:px-10">
      <div className="w-full flex justify-center items-center mx-auto ">
        <div className="h-full flex justify-center">
          <div className="w-[13rem] md:w-[20rem]  flex flex-col items-center gap-4">
            <div className="bg-gray-600 rounded-full w-10 h-10 md:w-14 md:h-14 flex justify-center items-center p-2">
              <BsPerson className="text-white text-4xl" />
            </div>
            <div className="w-full">
              <h2 className="text-md md:text-xl font-semibold  text-center text-[#F69E1E]">ACCOUNT INFORMATION</h2>
            </div>
          </div>
          <div className="border border-dashed bg-white w-[1] text-white"></div>
          <div className="w-[13rem] md:w-[20rem] flex flex-col items-center gap-4">
            <div className="bg-gray-600 rounded-full w-10 h-10 md:w-14 md:h-14 flex justify-center items-center p-2">
              <BsPerson className="text-white text-4xl" />
            </div>
            <div className="w-full">
              <h2 className="text-md md:text-xl font-semibold text-center  text-[#F69E1E]">PAYMENT DETAILS</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-full">
            <label for="first-name" class="block text-md font-normal leading-6 text-white">Username</label>
            <div class="mt-2 w-full flex justify-center gap-5">
              <div className="relative w-full">
                <input type="text" name="first-name" id="first-name" class="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                <AiOutlineEdit className="text-white absolute top-3 right-3 text-xl" />
              </div>
              <div class="flex gap-5 items-center w-full">
                <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <p className="text-white">Verified Account</p>
              </div>
            </div>
          </div>

          <div class="mt-10 col-span-full">
            <div className="flex items-center gap-5  text-[#F49F1C]">
              <PiAddressBookLight className="text-4xl" />
              <h2 className="text-2xl">CONTACT PERSON</h2>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="first-name" class="block text-md font-normal leading-6 text-white">First name/s</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" class="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="first-name" class="block text-md font-normal leading-6 text-white">Family name</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" class="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="first-name" class="block text-md font-normal leading-6 text-white">Preferred greeting</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" class="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="first-name" class="block text-md font-normal leading-6 text-white">Job title in your business</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" class="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="first-name" class="block text-md font-normal leading-6 text-white">Email address</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" class="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="first-name" class="block text-md font-normal leading-6 text-white">Mobile number</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" class="block w-full rounded-lg border-0 pl-3 pr-10 py-2.5 bg-transparent text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-white">Cover photo</label>
            <div class=" flex relative justify-center w-60 h-full rounded-lg border border-dashed border-gray-400 px-6 py-5">
              <label for="file-upload" class="absolute cursor-pointer rounded-md w-full h-full top-0 font-semibold focus-within:outline-none ">
                {/* <span>Upload a file</span> */}
                <input id="file-upload" name="file-upload" type="file" class="sr-only" />
              </label>
              <div class="text-center">
                <BsCloudUpload className="w-10 h-10 mx-auto text-gray-300" />
                <p class="pl-1 text-sm text-white">Drop your files here</p>
                <div class="mt-4 flex text-sm leading-6 text-gray-600">

                  <p class="text-xs leading-5 text-gray-600">.pdf .tiff .jpg (2.5 MB maximum file size)
                    502 pixels x 502 pixels</p>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Account;
