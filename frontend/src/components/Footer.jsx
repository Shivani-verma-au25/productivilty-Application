import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-primary-soft  rounded-xl shadow-xs border border-default m-2 max-w-7xl mx-auto">
      <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
        
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://img.icons8.com/?size=100&id=gNxdPrWHLwdD&format=png&color=000000"
              className="h-7"
              alt="Productivity app "
            />
            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
              Productivity
            </span>
          </Link>

          {/* Links */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-default sm:mx-auto lg:my-8" />

        <span className="block text-sm text-body sm:text-center">
          © 2026{" "}
          <a href="/" className="hover:underline">
            Prodctivity App™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
