import Link from "next/link";
import React from "react";
import site from "@config/site.json";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white rounded-lg shadow m-4  bg-white/10 p-2 backdrop-blur-sm dark:bg-[#0b14374d] ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}
          <Link href="/" className="hover:underline pl-4">
            {site.siteName}™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="mr-4 hover:underline md:mr-6"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
