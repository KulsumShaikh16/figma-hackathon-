import React from "react";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const Blogs = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto bg-[#FFFFFF]">
          <div className="flex flex-col text-center w-full ">
            <h2 className="text-[36px] text-[#000000] title-font font-medium title-font mb-1">
              Our Blogs
            </h2>
            <p className="sm:text-[14px] text-[16px] font-medium  mb-4 text-[#9F9F9F]">
              Find a bright ideal to suit your taste with our great selection
            </p>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto gap-2">
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/3">
              <div className="  rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-fill object-center"
                  src="/blog1.svg"
                  alt="blog"
                  width={393}
                  height={393}
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3 text-center text-[20px]">
                    Going all-in with millennial design
                  </p>

                  <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center text-[#000000] border-b-black border-[2px] text-[24px] font-medium">
                      View More
                    </button>
                  </div>
                  <div className="flex text-center gap-2 justify-center items-center text-[#9F9F9F] mt-4">
                    <FaRegClock className="font-bold" />
                    <p className="text-[16px] font-[300]">5 min</p>
                    <CiCalendar className="font-bold" />
                    <p className="text-[16px] font-[300] ">12th Oct 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full  rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-fill object-center"
                  src="/blog2.svg"
                  alt="blog"
                  width={393}
                  height={393}
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3 text-center text-[20px]">
                    Going all-in with millennial design
                  </p>
                  <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center text-[#000000] border-b-black border-[2px] text-[24px] font-medium">
                      View More
                    </button>
                  </div>
                  <div className="flex text-center gap-2 justify-center items-center text-[#9F9F9F] mt-4">
                    <FaRegClock className="font-bold" />
                    <p className="text-[16px] font-[300]">5 min</p>
                    <CiCalendar className="font-bold" />
                    <p className="text-[16px] font-[300] ">12th Oct 2022</p>
                  </div>
                
                </div>
              </div>
            </div>


            {/* images card */}
            <div className="p-4 md:w-1/3 ">
              <div className="h-full  rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-fill object-center"
                  src="/blog3.svg"
                  alt="blog"
                  width={393}
                  height={393}
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3 text-center text-[20px]">
                    Going all-in with millennial design
                  </p>
                  <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center text-[#000000] border-b-black border-[2px] text-[24px] font-medium">
                      View More
                    </button>
                  </div>
                  <div className="flex text-center gap-2 justify-center items-center text-[#9F9F9F] mt-4">
                    <FaRegClock className="font-bold" />
                    <p className="text-[16px] font-[300]">5 min</p>
                    <CiCalendar className="font-bold" />
                    <p className="text-[16px] font-[300] ">12th Oct 2022</p>
                  </div>
                  {/* <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
