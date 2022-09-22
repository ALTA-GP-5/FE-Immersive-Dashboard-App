import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import axios from "axios";

const Formadduser = () => {
  const route = useRouter();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    team: "",
    role: "",
    password: "",
    state: "",
  });

  const handleadduser = (e) => {
    e.preventDefault();
    axios
      .post("https://immersiveapp.site/mentor", user)
      .then((response) => {
        route.push("/userList");
      })
      .catch((error) => console.log(error));
  };

  const inputRegister = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="w-screen">
          <div className=" min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div className="flex items-center space-x-5">
                    <div className="h-14 w-14 bg-gray-200 rounded-full flex flex-shrink-0 justify-center items-center text-green-500 text-2xl font-mono">
                      LeByDo
                    </div>
                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                      <h2 className="leading-relaxed">Learning by Doing</h2>
                      <p className="text-sm text-gray-500 font-normal leading-relaxed">
                        form add user
                      </p>
                    </div>
                  </div>
                  <form onSubmit={(e) => handleadduser(e)}>
                    <div className="divide-y divide-gray-200">
                      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="flex flex-col">
                          <input
                            name="fullname"
                            value={user.fullname}
                            onChange={(e) => inputRegister(e)}
                            type="text"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="FullName"
                          />
                        </div>

                        <div className="flex flex-col">
                          <input
                            name="email"
                            value={user.email}
                            onChange={(e) => inputRegister(e)}
                            type="text"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Email"
                          />
                        </div>
                        <div className="flex flex-col">
                          <input
                            name="team"
                            value={user.team}
                            onChange={(e) => inputRegister(e)}
                            type="text"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Team"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-xs flex justify-center ">
                            Choose a Admin or Default for from
                          </p>
                          <input
                            name="role"
                            value={user.role}
                            onChange={(e) => inputRegister(e)}
                            type="text"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Role"
                          />
                        </div>
                        <div className="flex flex-col">
                          <input
                            name="password"
                            value={user.password}
                            onChange={(e) => inputRegister(e)}
                            type="password"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Password"
                          />
                        </div>

                        <div className="flex flex-col">
                          <p className="text-xs flex justify-center ">
                            Choose a Active or Non-Active for from
                          </p>
                          <input
                            name="status"
                            value={user.status}
                            onChange={(e) => inputRegister(e)}
                            type="text"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Status"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="flex justify-center text-slate-500 m h-8 w-48 "
                          variant="outlined"
                        >
                          Add User
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formadduser;
