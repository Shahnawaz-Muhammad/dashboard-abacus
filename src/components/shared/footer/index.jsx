import australia from "../../../assets/australia-flag.svg";
const Footer = () => {
  return (
    <div className=" max-w-screen-xl mx-auto w-full grid md:grid-cols-3 lg:grid-cols-5 gap-5 py-5">
      <div className="lg:col-span-2">
        <div className="flex flex-col gap-6 pr-6">
          <h1 className="text-white text-4xl font-semibold">
            Actors<span className="text-[#F69E1E]">Index</span>
          </h1>
          <p className="text-white">
            If you’re after a job in the film, TV and entertainment industry or
            have business services to offer, create a profile, post
            opportunities and find what you need.
          </p>
          <div className="flex flex-col gap-3 w-[80%]">
            <div className="inline-block relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-400">
                <img src={australia} alt="" />
              </div>
              <select className="block appearance-none w-full text-white bg-[#010D25] border border-gray-600 hover:border-gray-500 px-10 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Location</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="inline-block relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-400">
                <img src={australia} alt="" />
              </div>
              <select className="block appearance-none w-full text-white bg-[#010D25] border border-gray-600 hover:border-gray-500 px-10 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Language</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col gap-3">
        <h2>Finding Jobs</h2>
        <ul className="font-light">
          <li>Actors </li>
          <li>Extras </li>
          <li>Editors </li>
          <li>Camera </li>
          <li>Audio </li>
          <li>Script </li>
          <li>Voiceover </li>
          <li>Dancers </li>
          <li>Other Crew</li>
        </ul>
      </div>
      <div className="text-white flex flex-col gap-3">
        <h2>Company</h2>
        <ul className="font-light">
          <li>Financial Services </li> <li>Equipment hire </li>{" "}
          <li>Locations </li> <li>Special Effects </li> <li>Props </li>{" "}
          <li>Stunts </li> <li>Studios </li> <li>Production </li>{" "}
          <li>Companies </li> <li>Film Schools</li>
        </ul>
      </div>
      <div className="text-white flex flex-col gap-3">
        <h2>About us</h2>
        <ul className="font-light">
          <li>Media Centre</li> Legal <li>Terms & Conditions</li>{" "}
          <li>Privacy Policy </li> <li>Cookie Policy</li>{" "}
          <li>Cyber Security</li> <li>Bug Hunter</li> <li>FAQs</li>{" "}
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="col-span-full flex justify-center mt-10">
        <h2 className="text-md text-white">
          Actors Index Pty Ltd. ABN 123456789 Copyright ©2024. All Rights
          Reserved. Sitemap
        </h2>
      </div>
    </div>
  );
};

export default Footer;
