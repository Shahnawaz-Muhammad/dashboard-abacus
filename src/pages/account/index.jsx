import { BsPerson } from "react-icons/bs";
const Account = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full h-full flex justify-center gap-4">
          <div className=" flex flex-col items-center gap-4">
            <div className="bg-gray-400 rounded-full w-10 h-10 p-3">
              <BsPerson />
            </div>
            <h2>ACCOUNT INFORMATION</h2>
          </div>
          <div className="border border-dashed bg-white w-[1] text-white"></div>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-gray-400 rounded-full w-10 h-10 p-3">
              <BsPerson />
            </div>
            <h2>PAYMENT DETAILS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
