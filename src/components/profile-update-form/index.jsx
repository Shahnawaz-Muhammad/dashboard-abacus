import Location from "./Location";
import { AiOutlineEdit } from "react-icons/ai";

import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useContext } from "react";
import { FormContext } from "../../context/formContext";
import { useForm } from "react-hook-form";
import ContactPerson from "./ContactPerson";
import BusinessDetails from "./BusinessDetails";
import Security from "./Security";
import Membership from "./Membership";

const Form = () => {
  const { dispatch } = useContext(FormContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch({ type: "UPDATE_FIELD", field: "username", value: data.username });
    // dispatch({
    //   type: "UPDATE_FIELD",
    //   field: "familyName",
    //   value: data.familyName,
    // });
    console.log("hello, this is the submitted form", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="col-span-full">
          <label
            htmlFor="username"
            className="block text-md font-normal leading-6 text-white"
          >
            Username
          </label>
          <div className="mt-2 w-full flex flex-col sm:flex-row justify-center gap-5">
            <div className="relative w-full">
              <input
                type="text"
                name="username"
                id="username"
                {...register("username", { required: true })}
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

        <ContactPerson register={register}/>

        <BusinessDetails register={register}/>

        <Location register={register}/>

        <Security register={register}/>

        <Membership />
        <div className="sm:col-span-full w-full mt-10 sm:mt-6 flex justify-end gap-5 md:gap-10">
          <button className="bg-gray-200 rounded-full px-10 py-3">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
