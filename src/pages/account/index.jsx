import { BsPerson } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";

import Form from "../../components/profile-update-form";

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
              <h2 className="text-md md:text-xl font-semibold  text-center text-[#F69E1E]">
                ACCOUNT INFORMATION
              </h2>
            </div>
          </div>
          <div className="border border-dashed bg-white w-[1] text-white"></div>
          <div className="w-[13rem] md:w-[20rem] flex flex-col items-center gap-4">
            <div className="bg-gray-600 rounded-full w-10 h-10 md:w-14 md:h-14 flex justify-center items-center p-2">
              <MdOutlinePayment className="text-white text-4xl" />
            </div>
            <div className="w-full">
              <h2 className="text-md md:text-xl font-semibold text-center  text-[#F69E1E]">
                PAYMENT DETAILS
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        
        <Form />
      </div>
    </div>
  );
};

export default Account;
