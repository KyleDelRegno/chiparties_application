import type { NextConfig } from "next";
import firebase from "firebase/compat/app";

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
