"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
const NavDropdownItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};
const NavbarItem = ({item})=>{
  const hasDropdown = item.children && item.children.length>0;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!hasDropdown) return; 
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [hasDropdown]);

  if (!hasDropdown) {
    return (
      <Link
        href={item.link}
        className="flex text-base items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 px-2 py-2"
      >
        <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"> 
        {item.name}
        </span>
      </Link>
    );
  }

  return (
    <div className="relative group inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-gray-700 hover:text-blue-600 py-2 rounded-md text-base font-medium inline-flex items-center transition-colors focus:outline-none">
        {item.name}
        <ChevronDown
          className={`ml-1 mt-1 h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {item.children.map((child) => (
            <NavDropdownItem key={child.name} href={child.link}>
              {child.name}
            </NavDropdownItem>
          ))}
        </div>
      )}
    </div>
  );
};
export default NavbarItem;
