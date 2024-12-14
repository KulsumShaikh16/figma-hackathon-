import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Header from '@/components/Header'

const Hero = () => {
  return (
      <div>
    <div>
      <Header bgColor="#FBEBB5"/>
    </div>

      <section className="bg-[#FBEBB5] body-font pt-24 lg:pt-0 flex">
        <div className="container mx-auto lg:flex-row lg:justify-center flex flex-col items-center px-5 lg:first-letter:py-24 lg:py-0 gap-6 my-auto">
          <h1 className="text-[64px] p-8 tracking-[4px] font-medium text-[#000000] font-poppins text-center lg:text-start">
            Rocket single 
            <span className="block  mt-3" />
            seater <span/>
            <Link href="/shop">
                        <p className="text-2xl mt-8 underline underline-offset-8 text-black-600 ">Shop Now</p>
                    </Link>
          </h1>
          
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-8 ">
            <Image
              className="object-cover object-center rounded mx-auto h-auto"
              alt="Rocket single seater"
              src="/Rocket single seater 1.svg"
              width={825}
              height={1000}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
