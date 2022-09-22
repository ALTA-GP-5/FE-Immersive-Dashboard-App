import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TableUser from "../components/tableUser";
import Sidebar from "../components/sidebar";
import { setCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/router";

const UserList = () => {
  const route = useRouter();
  const [regis, setRegis] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("https://immersiveapp.site/mentors", regis)
      .then((response) => {
        setCookie("Token", response.data.data.token);
        setRegis(response.data.data);
      })
      .catch((error) => console.log(error));
  };

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

          {/* Pala */}

          {regis.map((item, index) => {
            return (
              <div key={index} className="">
                <div class="overflow-x-auto relative">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.fullname}
                        </td>
                        <td
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.email}
                        </td>
                        <td
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.team}
                        </td>
                        <td
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.role}
                        </td>
                        <td
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.status}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserList;
