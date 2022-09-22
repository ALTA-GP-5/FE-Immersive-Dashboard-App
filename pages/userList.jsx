import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useRouter } from "next/router";

const UserList = () => {
  const route = useRouter();
  const [regis, setRegis] = useState([]);

  const getUser = () => {
    axios
      .get("https://immersiveapp.site/mentors")
      .then((response) => {
        setRegis(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  const handleDeleteUser = (regis) => {
    axios
      .delete(`https://immersiveapp.site/mentor/${regis}`)
      .then((response) => {
        console.log(response);
        getUser();
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getUser();
  });

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
            <div className="flex absolute top-15 right-4 mt-2 padding-2">
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
            </div>
          </div>
          {/* penutup search */}

          {/* Pala */}
          <div className="w-9/12 mx-auto  overflow-hidden rounded-lg shadow-xs mt-20">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-no-wrap">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-300 text-gray-200 bg-gray-500">
                    <th className="px-4 py-3 text-center">Fullname</th>
                    <th className="px-4 py-3 text-center">Email</th>
                    <th className="px-4 py-3 text-center">Team</th>
                    <th className="px-4 py-3 text-center">Role</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-700 bg-gray-300">
                  {regis.map((item) => {
                    return (
                      <>
                        <tr className="text-gray-800" key={item.id}>
                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center text-sm">
                              <p className="font-semibold">{item.fullname}</p>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center text-sm">
                            {item.email}
                          </td>
                          <td className="px-4 py-3 text-center text-sm">
                            {item.team}
                          </td>
                          <td className="px-4 py-3 text-center text-sm">
                            {item.role}
                          </td>
                          <td className="px-4 py-3 text-center text-sm">
                            {item.status}
                          </td>

                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center justify-center space-x-4 text-sm">
                              <button
                                className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-blue-500 
                                underline focus:outline-none focus:shadow-outline-gray"
                                aria-label="Edit"
                                onClick={() => route.push("/editUser")}
                              >
                                edit
                              </button>
                              <button
                                className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-red-500 
                                underline focus:outline-none focus:shadow-outline-gray"
                                aria-label="Delete"
                                onClick={() => handleDeleteUser(item.id)}
                              >
                                delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
