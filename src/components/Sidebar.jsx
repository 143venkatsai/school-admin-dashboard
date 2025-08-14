import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { CiSquareRemove } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";


export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Students", path: "/students" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 h-full w-64 p-4 flex flex-col shadow-lg bg-white border-r border-gray-200 z-20
      transform transition-transform duration-300
      lg:translate-x-0 lg:static
      ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      <div className="flex justify-between items-center mb-8">
        <BsStars className="text-xl h-8 w-8 p-2 bg-blue-500 text-white rounded-lg" />
        <div className="mr-auto ml-2">
          <h1 className="text-lg font-bold text-blue-500">SpeakGenie</h1>
          <p className="text-sm text-gray-400">Admin Panel</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden"
        >
          <CiSquareRemove className="h-8 w-8 text-black" />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block px-3 py-2 rounded text-md font-semibold hover:bg-blue-600 hover:text-white ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="mt-auto">
        <li className="flex items-center gap-4">
          <p className="bg-blue-500 text-white px-3 py-1 rounded-lg">S</p>
          <div className="flex-1">
            <h2 className="font-bold text-gray-900">School Admin</h2>
            <p className="text-sm text-gray-500">School Admin</p>
            <p className="text-semibold text-green-600">Greenwood Elementary</p>
          </div>
            <button>
              <IoLogOutOutline  className="text-3xl text-gray-500 cursor-pointer" />
          </button>
        </li>
      </div>
    </nav>
  );
}
