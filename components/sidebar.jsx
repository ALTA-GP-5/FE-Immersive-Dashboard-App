import React from "react";
import Image from "next/image";

import Logo from "../assets/logo1.png";

const Sidebar = () => {
  return (
    <div className="md:w-3/12 w-6/12 h-full shadow-2xl">
      <div className=" border-b py-3 mt-1 flex justify-around ">
        <p className="text-xl  font-semibold">
          <Image src={Logo} alt="lebydo" />
        </p>
        <p className="text-gray-400 text-lg"></p>
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <p className=" ">Dashboard</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <p className="text-gray-600  ">Mentee</p>
            </div>
          </div>

          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <p className="text-gray-600  ">Users</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <p className="text-gray-600  ">Class</p>
            </div>
          </div>
        </div>
        <div className="space-y-6"></div>
      </div>
    </div>
  );
};

export default Sidebar;
