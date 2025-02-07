



"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Product1 {
  _id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
}

const Toppick = () => {
  const [topPicks, setTopPicks] = useState<Product1[]>([]);

  useEffect(() => {
    const fetchTopPicks = async () => {
      const data = await client.fetch(`
        *[_type == "product"][0..3]{
          _id,
          name,
          "slug": slug.current,
          price,
          "imageUrl": image.asset->url
        }
      `);
      setTopPicks(data);
    };

    fetchTopPicks();
  }, []);

  return (
    <div className="bg-[#FFFFFF] py-24">
      <div className="container mx-auto text-center mb-20 px-5">
        <h2 className="text-3xl md:text-4xl text-[#000000] font-medium mb-1">
          Top Picks For You
        </h2>
        <p className="text-sm md:text-base font-medium mb-4 text-[#9F9F9F]">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Images Card */}
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap -m-4">
          {topPicks.map((item) => (
            <div key={item._id} className="p-4 md:w-1/2 lg:w-1/4">
              <div className="h-full overflow-hidden">
                <Link href={`/product/${item.slug}`}>
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={item.imageUrl}
                    alt={item.name}
                    width={750}
                    height={384.86}
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg text-[#000000] mb-3">
                      {item.name}
                    </h1>
                    <p className="leading-relaxed mb-3 text-xl font-medium">
                      Rs. {item.price}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8">
          <Link href="/shop">
            <button className="flex justify-center items-center text-[#000000] underline underline-offset-8 text-lg font-medium">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toppick;
