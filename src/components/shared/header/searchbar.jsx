import { HiOutlineSearch } from "react-icons/hi";
import { useRef  } from "react";

function  SearchBar() {
  
  const dropdownRef = useRef(null);


  return (
    <div className="flex flex-row z-50" ref={dropdownRef}>
      
          <div className="relative items-center">
            <div
              className="bg-greyDark text-gray-800 absolute  -left-1 top-1/2 shadow-md -translate-y-1/2 h-full flex items-center px-3"
            >
              <HiOutlineSearch fontSize={20} />
            </div>
            <input
              type="text"
              placeholder="Type Your Search..."
              className="bg-[#0A163B] text-black text-sm focus:outline-none active:outline-none shadow-lg w-[20rem] md:w-[22rem] lg:w-[25rem] h-10 pl-12 pr-24 md:pr-28  rounded-xl"
            />
            </div>
        
    </div>
  );
}

export default SearchBar;
