import { HiOutlineSearch } from "react-icons/hi";
import { useRef  } from "react";

function  SearchBar() {
  
  const dropdownRef = useRef(null);


  return (
    <div className="hidden md:flex md:flex-row z-30" ref={dropdownRef}>
      
          <div className="relative items-center flex w-full">
            <div
              className=" text-gray-300 absolute  -left-1 top-1/2 shadow-md -translate-y-1/2 h-full  w-full flex items-center px-3"
            >
              <HiOutlineSearch fontSize={20} />
            </div>
            <input
              type="text"
              placeholder="Type Your Search..."
              className="bg-[#0A163B] text-white text-sm focus:outline-none active:outline-none shadow-lg  h-14 pl-12 pr-24 md:pr-28 w-full rounded-xl"
            />
            </div>
        
    </div>
  );
}

export default SearchBar;
