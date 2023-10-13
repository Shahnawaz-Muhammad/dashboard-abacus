import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./searchbar";
import { HiOutlineBell } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";

export default function Header() {
  const navigate = useNavigate();
  // const [enabled, setEnabled] = useState(false)

  return (
    <div className="bg-transparent h-16 px-4 flex items-center justify-end ">
      <div className="flex items-center justify-between w-full ">
        <div className="flex  md:flex-row justify-between w-[50%] gap-5 flex-initial">
          <SearchBar />
        </div>
        <div className="flex gap-5 items-center max-w-full">
          <div className="relative h-full w-full border border-[#D8D8D8] p-3 rounded-xl">
            <HiOutlineBell className="text-white text-xl" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-[#D8D8D8] border-2 border-white rounded-full -top-1 -right-2 ">
             
            </div>
          </div>

          <div className="relative h-full w-full border border-[#D8D8D8] p-3 rounded-xl">
            <BiMessageDetail className="text-white text-xl" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-[#D8D8D8] border-2 border-white rounded-full -top-1 -right-2 ">
             
            </div>
          </div>

          <Menu as="div" className="relative">
            <div>
              <Menu.Button className=" bg-gray-800 flex text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-400">
                <span className="sr-only">Open user menu</span>
                <div
                  className="h-12 w-12 rounded-xl bg-sky-500 bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/80x80?face")',
                  }}
                >
                  <span className="sr-only">Marc Backes</span>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div className="flex flex-col px-4 py-2">
                      <h1 className="text-sm md:text-md">
                        Hello, Developer User
                      </h1>
                      <p className={`${active && "bg-gray-100"},   text-sm`}>
                        Helpdesk Record Manager
                      </p>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/account")}
                      className={`
											${active && "bg-gray-100"},
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										`}
                    >
                      Your Profile
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/settings")}
                      className={`
											${active && "bg-gray-100"},
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										`}
                    >
                      Settings
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`
                  ${active && "bg-gray-100"},
                  'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                `}
                    >
                      Sign out
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
