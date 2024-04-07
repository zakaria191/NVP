import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "#about" },
    { id: 3, text: "Services", link: "#services" },
    { id: 4, text: "Expertise", link: "#expertise" },
    { id: 5, text: "Contact", link: "#contact" },
  ];

  return (
    <div className="bg-blue-950 flex justify-between items-center h-20 w-full px-10 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">NEWVENTURECP</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="px-4 py-2 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <a href={item.link}><span>{item.text}</span></a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[75%] z-50 h-full border-r border-r-gray-900 bg-blue-950 ease-in-out duration-500"
            : "ease-in-out w-[75%] duration-500 fixed top-0 bottom-0 left-[-100%] "
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl my-8 font-bold text-[#00df9a] m-4">
          NEWVENTURECP
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
