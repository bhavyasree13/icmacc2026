"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", hasDropdown: true },
    { name: "Hyderabad", hasDropdown: true },
    { name: "Agenda", hasDropdown: true },
    { name: "Committee", hasDropdown: true },
    { name: "Inspiring Visionaries", hasDropdown: false },
    { name: "Sponsorship", hasDropdown: false },
    { name: "ICMACC 2024", hasDropdown: true },
  ];

  return (
    <nav className="bg-white shadow-md relative z-50 w-full">
      <div className="w-full px-0">

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center justify-between h-20 w-full px-6">

          {/* Left Logo */}
          <div className="flex-shrink-0 mr-4"> {/* Reduced space between logo and links */}
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="IEEE Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-10"> {/* Increased space between links */}
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
                    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                      {item.name}
                    </span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-3 w-52 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          Option 1
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          Option 2
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0 ml-4"> {/* Keeps right logo aligned properly */}
            <Image
              src="/logoright.png"
              alt="Right Logo"
              width={220}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden justify-between items-center h-16 px-4">
          {/* Left Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="IEEE Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2 px-4">
            {navItems.map((item, index) => (
              <div key={index} className="py-2">
                <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}

            {/* Right Logo in Mobile Menu */}
            <div className="flex justify-center mt-4">
              <Image
                src="/logoright.png"
                alt="Right Logo"
                width={180}
                height={60}
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
    