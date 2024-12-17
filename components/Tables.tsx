import React from "react";
import Image from "next/image";
import Link from "next/link"

const Tables = () => {
  return (


<div>
<div className='flex flex-col md:flex-row bg-[#F4F4F4] justify-around  mx-auto p-10'>
    <div>
        <Image
            alt='table'
            className=''
            height={500}
            width={500}
            src='/Granite square side table 1.svg'
        />
        <h3 className='text-3xl font-medium'>Side table</h3>
        <Link href='/shop'>
            <p className="text-xl mt-8 underline underline-offset-8 text-black-600 ">View More</p>
        </Link>
    </div>
    <div className="pt-9">
        <Image
            alt='table'
            className=''
            height={500}
            width={500}
            src='/Cloud sofa three seater + ottoman_3 1.svg'
        />
        <h3 className='text-3xl font-medium'>Side table</h3>
        <Link href='/shop'>
            <p className="text-xl mt-8 underline underline-offset-8 text-black-600 ">View More</p>
        </Link>
    </div>
</div>
</div>
  );
};

export default Tables;
