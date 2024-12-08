import React from "react";
import Image from "next/image";

const Tables = () => {
  return (
    <div className="#FAF4F4 w-screen">
      <div className="container px-5 py-24 mx-auto flex justify-evenly ">
        <div className="xl:w-1/4 md:w-1/2 p-4 lg:w-[1585]">
          <div className=" p-6 ">
            <Image
              className="h-40  w-full object-fill object-right "
              src="/Granite square side table 1.svg"
              alt="content"
              width={1092}
              height={1641}
            />

            <h2 className="text-[36px] text-[#000000] font-medium  mb-4">
              Side table
            </h2>
            <p className="leading-relaxed text-[24px] font-medium border-b-black border-[2px] lg:w-[125px]">
              View More
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className=" p-6 ">
            <Image
              className="h-40  w-full object-cover object-right "
              src="/Cloud sofa three seater + ottoman_3 1.svg"
              alt="content"
              width={1092}
              height={1641}
            />
            <h2 className="text-[36px] font-medium  mb-4">Side table</h2>
            <p className="leading-relaxed text-[24px] font-medium border-b-black border-[2px] lg:w-[125px]">
              View More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
