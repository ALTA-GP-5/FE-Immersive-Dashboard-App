import React, { useState } from "react";
import { Button } from "@mui/material";
import TableUser from "../components/tableUser";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";

const UserList = () => {
  const route = useRouter();

  const [listUser, setListUser] = useState([
    "Fullname",
    "Email",
    "Team",
    "Roles",
    "Status",
  ]);
  const [table, setTable] = useState([
    {
      Fullname: "Ikram Abdillah",
      Email: "Ikram.koli@gmail.com",
      Team: "placement",
      Roles: "default",
      Status: "active",
    },
    {
      Fullname: "Ganjar Widatama",
      Email: "gwidatama@gmail.com",
      Team: "people-skill",
      Roles: "default",
      Status: "non-active",
    },
    {
      Fullname: "Wahyu Gubernur",
      Email: "soepoer.wahyu@gmail.com",
      Team: "mentor",
      Roles: "admin",
      Status: "active",
    },
    {
      Fullname: "Rofifattuz Zulfa",
      Email: "LordZul@gmail.com",
      Team: "mentor",
      Roles: "admin",
      Status: "active",
    },
  ]);

  return (
    <>
      <div className="flex w-screen h-screen">
        <Sidebar />

        <div className="w-screen">
          <div className=" shadow-sm bg-gray-200 w-full h-24 p-4 justify-between  ">
            <div className="space-x-3  ">
              <div className="flex justify-between">
                <h1 className="font-bold  text-xl text-slate-500 ml-3">
                  Immersive Dashboard
                </h1>
                <h1 className=" font-bold text-xl text-slate-900 mr-10 mt-3">
                  Hallo, Lord
                </h1>
              </div>
              <h1 className="font-bold text-lg text-slate-500 ">User list</h1>
            </div>
            <hr />
          </div>
          {/* penutup header */}
          {/* pembuka search  */}
          <div>
            <form className="flex absolute top-15 right-4 mt-2 padding-2">
              <div className="relative text-gray-200 focus-within:text-gray-200">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  className="py-2 text-sm text-white bg-gray-500 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-500"
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>
              <Button
                onClick={() => {
                  route.push("/formadduser");
                }}
                className="flex text-slate-900 "
                variant="outlined"
              >
                Add new
              </Button>
            </form>
          </div>
          {/* penutup search */}
          <TableUser listUser={listUser} table={table} />
        </div>
      </div>
    </>
  );
};

export default UserList;
