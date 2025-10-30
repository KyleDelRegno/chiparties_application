import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  //Everytime any page loads, auto redirects to the login
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Login',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
