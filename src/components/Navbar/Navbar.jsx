
"use client";
link: "/callforpapers"


import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Hyderabad",
      link: "/hyderabad",
      children: [
        { name: "Option 1", link: "/#option1" },
        { name: "Option 2", link: "/#option2" },
      ],
    },
    {
      name: "Author Toolkit",
      children: [
        { name: "Submit Paper", link: "/" },
        { name: "Call for Papers", link: "/callforpapers" },
        { name: "Register", link: "/" },
      ],
    },
    // { name: "Agenda", hasDropdown: true },
    {
      name: "Committee",
      children: [
        { name: "Option 1", link: "/#option1" },
        { name: "Option 2", link: "/#option2" },
      ],
    },
    // { name: "Inspiring Visionaries", hasDropdown: false },
    { name: "Sponsorship", link: "/sponsorship", children: [] },
    { name: "Acknowledgement", link: "/acknowledgement", children: [] },
    {
      name: "ICMACC",
      children: [
        { name: "ICMACC 2024", link: "https://icmacc-2024.web.app/" },
        { name: "ICMACC 2022", link: "http://icmacc2022.ieee-icmacc.org/" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md relative z-50 w-full">
      <div className="w-full px-0">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center justify-between h-20 w-full px-6">
          {/* Left Logo */}
          <div className="flex-shrink-0 mr-4">
            {" "}
            {/* Reduced space between logo and links */}
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
            <div className="flex items-end space-x-8">
              {navItems.map((item) => (
                <NavbarItem key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0 ml-4">
            {" "}
            {/* Keeps right logo aligned properly */}
            <Image
              src="/hydsec.png"
              alt="Hyderabad Section Logo"
              width={120}
              height={100}
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
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2 px-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.children && item.children.length > 0 ? (
                  <div className="space-y-1">
                    <button
                      className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600 py-2 font-medium"
                      onClick={() =>
                        setIsMenuOpen((prev) => ({
                          ...prev,
                          [item.name]: !prev[item.name],
                        }))
                      }
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          isMenuOpen[item.name] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isMenuOpen[item.name] && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.link}
                            className="block text-gray-700 hover:text-blue-600 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Right Logo in Mobile Menu */}
            <div className="flex justify-center mt-4">
              <Image
                src="/hydsec.png"
                alt="Hyderabad Section Logo"
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

export default Navbar;
