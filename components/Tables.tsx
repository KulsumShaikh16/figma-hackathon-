import React from "react";
import Image from "next/image";
import Link from "next/link"

const Tables = () => {
  return (
//     <div className="#FAF4F4 w-screen">
//       <div className="container px-5 py-24 mx-auto flex justify-evenly ">
//         <div className="xl:w-1/4 md:w-1/2 p-4 lg:w-[1585] sm:mx-auto sm:w-full">
//           <div className=" p-6 ">
//             <Image
//               className="h-40  w-full object-fill object-right "
//               src="/Granite square side table 1.svg"
//               alt="content"
//               width={600}
//               height={600}           />
//         <h2 className="lg:text-[36px] sm:text-[30px] text-[#000000] font-medium  mb-4">
//           Side table
//         </h2>
//         <p className="leading-relaxed lg:text-[24px] sm:[16px] sm:w-full font-medium border-b-black border-[2px] lg:w-[125px]">
//           View More
//         </p>
//       </div>
//     </div>
//     <div className="xl:w-1/4 md:w-1/2 p-4 sm:flex flex-col">
//       <div className=" p-6 ">
//         <Image
//           className="h-40  w-full object-fill object-center "
//           src="/Cloud sofa three seater + ottoman_3 1.svg"
//           alt="content"
//           width={500}
//           height={500}
//         />
//         <h2 className="lg:text-[36px] sm:text-[30px] text-[#000000] font-medium  mb-4">Side table</h2>
//         <p className="leading-relaxed lg:text-[24px] sm:[16px] sm:w-full  font-medium border-b-black border-[2px] lg:w-[125px]">
//           View More
//         </p>
//       </div>
//     </div>
//   </div>
// </div>


<div>
<div className='flex flex-col md:flex-row bg-[#F4F4F4] justify-around mx-auto p-10'>
    <div>
        <Image
            alt=''
            className=''
            height={500}
            width={500}
            src='/Granite square side table 1.svg'
        />
        <h3 className='text-3xl font-medium'>Side table</h3>
        <Link href='/'>
            <p className="text-xl mt-8 underline underline-offset-8 text-black-600 ">View More</p>
        </Link>
    </div>
    <div className="pt-9">
        <Image
            alt=''
            className=''
            height={500}
            width={500}
            src='/Cloud sofa three seater + ottoman_3 1.svg'
        />
        <h3 className='text-3xl font-medium'>Side table</h3>
        <Link href='/'>
            <p className="text-xl mt-8 underline underline-offset-8 text-black-600 ">View More</p>
        </Link>
    </div>
</div>
</div>
  );
};

export default Tables;
