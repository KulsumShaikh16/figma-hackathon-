"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaUserLarge } from 'react-icons/fa6';
import { IoIosArrowForward } from "react-icons/io";
import { GiWoodenChair } from 'react-icons/gi';
import Header from '@/components/Header';
import Page from '@/components/Pagination'
import Shopcta from '@/components/Shopcta';
import Footer from '@/components/Footer'


function Blog() {
    return (
      <div> 
        <div>
      <Header bgColor="#FFFFFF"/>
    </div>
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4 ">
           
            {/* Banner Section */}
            <div className='w-screen bg-[url(/shop.svg)] bg-cover bg-no-repeat bg-center object-fill h-auto lg:h-[316px]  lg:py-10 py-6 px-8 flex flex-col justify-center items-center gap-4'>
<Image
src="/Meubel House_Logos-05.svg"
alt="logo"
width={77}
height={77}

/>
<h1 className='text-[48px]  text-center text-[#000000] font-medium '>Account</h1>
<div className='flex'><Link href="/home" className='text-[16px] font-medium'>Home</Link>
<IoIosArrowForward  className='text-[20px]'/>
<Link href="/account" className='text-[16px] font-medium'>Account</Link></div>


</div>

            <div className="flex flex-col lg:flex-row mx-10">
  {/* Blog Posts Section */}
  <div className="mt-8 w-full lg:w-3/4 gap-6">
    {/* Single Blog Post */}
    {[
      { image: "/blog1.svg", title: "Going all-in with millennial design", category: "Crafts", date: "01 Jan 2023" },
      { image: "/blog2.svg", title: "Exploring new ways of decorating", category: "Design", date: "15 Mar 2023" },
      { image: "/blog3.svg", title: "Handmade pieces that took time to make", category: "Wood", date: "20 Sep 2023" },
    ].map((post, index) => (
      <div key={index} className="bg-white p-4 rounded-lg transition-shadow">
        <Image
          src={post.image}
          height={500}
          width={817}
          alt={`Image for ${post.title}`}
          className="rounded-t-lg"
        />
        <div className="flex items-center space-x-4 mt-3 text-[16px] text-[#9F9F9F]">
          <div className="flex items-center  space-x-1">
            <FaUserLarge />
            <p>Admin</p>
          </div>
          <div className="flex items-center space-x-1">
            <FaCalendar />
            <p>{post.date}</p>
          </div>
          <div className="flex items-center space-x-1">
            <GiWoodenChair />
            <p>{post.category}</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
        <p className="mt-2 text-[#9F9F9F] line-clamp-4 lg:w-[817px]  text-[15px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <Link
          href={`/blog/post-id-${index + 1}`} // Dynamic link based on post ID
          className="mt-4 block text-primary underline underline-offset-4"
        >
          Read More
        </Link>
      </div>
    ))}
  </div>

  {/* Sidebar Section */}
  <div className="mt-10 w-full lg:w-1/4 p-6 gap-6 ml-5">
    {/* Categories */}
    <div className="p-6 rounded-lg">
      <h3 className="lg:text-[24px] text-3xl text-[#000000] font-[500] mb-4 text-center lg:text-left">Categories</h3>
      <ul className="space-y-8 text-[#9F9F9F] text-[20px] text-center">
        {[
          { name: 'Crafts', count: 2 },
          { name: 'Design', count: 8 },
          { name: 'Handmade', count: 7 },
          { name: 'Interior', count: 1 },
          { name: 'Wood', count: 6 },
        ].map((category, index) => (
          <li key={index} className="md:flex md:justify-between md:text-sm text-2xl mb-10">
            <span>{category.name}</span>
            <span>{category.count}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Recent Posts */}
    <div className="lg:p-6 rounded-lg ">
      <h3 className="text-[24px] text-[#000000] font-[500] mb-4 text-3xl text-center mt-5 lg:text-left">Recent Posts</h3>
      <div className="space-y-6">
        {[
          { image: '/blogrecent1.svg', title: 'Going all-in with millennial design', date: '03 Aug 2022' },
          { image: '/blogrecent2.svg', title: 'Exploring new ways of decorating', date: '03 Aug 2022' },
          { image: '/blogrecent3.svg', title: 'Handmade pieces that took time to make', date: '03 Aug 2022' },
          { image: '/blogrecent4.svg', title: 'Modern home in Milan', date: '03 Aug 2022' },
          { image: '/blogrecent5.svg', title: 'Colorful office redesign', date: '03 Aug 2022' },
        ].map((post, index) => (
          <div key={index} className="flex space-x-3">
            <Image src={post.image} height={100} width={100} alt="" />
            <div>
              <h4 className="md:text-lg font-semibold text-normal">{post.title}</h4>
              <p>{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


            <div className='justify-center mx-auto text-center'>
            <Page 
                totalPages={10} 
                currentPage={1} 
                onPageChange={(page) => console.log(`Page changed to ${page}`)} 
            />
                
                <Shopcta />
                <Footer />
            
            </div>
        </div>
        </div>
    );
}

export default Blog;