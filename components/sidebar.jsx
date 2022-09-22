import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../assets/logo1.png";
import { deleteCookie, getCookie } from "cookies-next";

const Sidebar = () => {
  const route = useRouter();
  const Token = getCookie("Token");

  const handleLogout = () => {
    deleteCookie("Token");
    route.push("/");
  };
  return (
    <div className="md:w-3/12 w-6/12 h-screen bg-slate-300">
      <div className=" border-b py-3 mt-1 flex justify-around ">
        <p className="text-xl  font-semibold">
          <button
            onClick={() => {
              route.push("/dashboard");
            }}
          >
            <Image src={Logo} alt="lebydo" />
          </button>
        </p>
        <p className="text-gray-400 text-lg"></p>
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          <div className="">
            <div className="flex p-3 text-gray-900  space-x-4 0 hover:bg-gray-400 hover:text-slate-50  cursor-pointer  ">
              <button
                onClick={() => {
                  route.push("/dashboard");
                }}
              >
                Dashboard
              </button>
              {/* <p className=" ">Dashboard</p> */}
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-900  space-x-4 0 hover:bg-gray-400 hover:text-slate-50  cursor-pointer  ">
              <button
                onClick={() => {
                  route.push("/menteeList");
                }}
              >
                Mentee
              </button>
              {/* <p className="text-gray-600  ">Mentee</p> */}
            </div>
          </div>

          <div className="">
            <div className="flex p-3 text-gray-900  space-x-4 0 hover:bg-gray-400 hover:text-slate-50  cursor-pointer  ">
              <button
                onClick={() => {
                  route.push("/userList");
                }}
              >
                User
              </button>
              {/* <p className="text-gray-600  ">Users</p> */}
            </div>
          </div>
          <div>
            <div className="flex p-3 text-gray-900  space-x-4 0 hover:bg-gray-400 hover:text-slate-50  cursor-pointer  ">
              <button
                onClick={() => {
                  route.push("/classList");
                }}
              >
                Class
              </button>
            </div>
          </div>
          <div>
            <div className="flex p-3 text-gray-900  space-x-4 0 hover:bg-gray-400 hover:text-slate-50  cursor-pointer  ">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
        <div className="space-y-6"></div>
      </div>
    </div>
  );
};

export default Sidebar;
