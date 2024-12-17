import React from "react";
import Image from "next/image";
import Link from "next/link"
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const Blogs = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto bg-[#FFFFFF]">
          <div className="flex flex-col text-center w-full ">
            <h2 className="text-[36px] text-[#000000] title-font font-medium title-font mb-1">
              Our Blogs
            </h2>
            <p className="sm:text-[14px] text-[16px] font-medium  text-[#9F9F9F]">
              Find a bright ideal to suit your taste with our great selection
            </p>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto gap-2">
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/3">
              <div className="  rounded-lg overflow-hidden">
                <Image
                  className="w-full object-fill object-center"
                  src="/blog1.svg"
                  alt="blog"
                  width={450}
                  height={450}
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3 text-center text-[20px]">
                    Going all-in with millennial design
                  </p>

                  <div className="flex justify-center items-center">
                  <Link href="/blog">
                  <button className="flex justify-center items-center text-[#000000] underline underline-offset-8 text-[24px] font-medium">
                      View More
                    </button>
                    </Link>
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
                  className=" w-full object-fill object-center"
                  src="/blog2.svg"
                  alt="blog"
                  width={450}
                  height={450}
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3 text-center text-[20px]">
                    Going all-in with millennial design
                  </p>
                  <div className="flex justify-center items-center">
                  <Link href="/blog">
                  <button className="flex justify-center items-center text-[#000000] underline underline-offset-8 text-[24px] font-medium">
                      View More
                    </button>
                    </Link>
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
                  className="w-full object-fill object-center"
                  src="/blog3.svg"
                  alt="blog"
                  width={450}
                  height={450}
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3 text-center text-[20px]">
                    Going all-in with millennial design
                  </p>
                  <div className="flex justify-center items-center">
                    <Link href="/blog">
                  <button className="flex justify-center items-center text-[#000000] underline underline-offset-8 text-[24px] font-medium">
                      View More
                    </button>
                    </Link>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
