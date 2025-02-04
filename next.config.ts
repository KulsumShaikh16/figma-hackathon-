import type { NextConfig } from "next";

const nextConfig :NextConfig = {
  images:{
    remotePatterns:[
        {
            hostname:"cdn.sanity.io"
        }
    ]
}
const { clerk } = require('@clerk/nextjs');

clerk({
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
});

  
};


export default nextConfig;
