import React from "react";
import { Button } from "@mui/material";

const Formadduser = () => {
  const options = ["QE 7", "FE 8", "BE 11"];

  return (
    <>
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
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    {/* <label className="leading-loose">FullName</label> */}
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="FullName"
                    />
                  </div>
                  <div className="flex flex-col">
                    {/* <label className="leading-loose">Event Subtitle</label> */}
                    <input
                      type="password"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex flex-col">
                    {/* <label className="leading-loose">Event Subtitle</label> */}
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex flex-col">
                    {/* <label className="leading-loose">Event Subtitle</label> */}
                    <input
                      type="dropdown"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Team"
                    />
                  </div>

                  {/* radio */}
                  <div className="main flex  overflow-hidden select-none">
                    <div className="title py-1 my-auto px-5 font-semibold">
                      Status
                    </div>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="radio"
                        name="sfg"
                      />
                      <div className="title px-2">Active</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="radio"
                        name="sfg"
                      />
                      <div className="title px-2">Non-Active</div>
                    </label>
                  </div>
                  {/* Role */}
                  <div className="main flex  overflow-hidden select-none">
                    <div className="title py-1 my-auto px-5 font-semibold">
                      Role
                    </div>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="radio"
                        name="sfg2"
                      />
                      <div className="title px-2">Admin</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="radio"
                        name="sfg2"
                      />
                      <div className="title px-2">Default</div>
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      className="flex justify-center text-slate-500 ml-3 h-8 w-48 "
                      variant="outlined"
                    >
                      Add User
                    </Button>
                  </div>
                  {/* Dropdown */}
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
