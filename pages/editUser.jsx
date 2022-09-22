import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import axios from "axios";

const EditUser = () => {
  const route = useRouter();
  const [regis, setRegis] = useState([]);
  const [edit, setEdit] = useState({
    fullname: "",
    email: "",
    team: "",
    status: "",
    roles: "",
  });

  const getUser = () => {
    axios
      .get("https://immersiveapp.site/mentors")
      .then((response) => {
        setRegis(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleEditUser = (regis) => {
    axios
      .put(`https://immersiveapp.site/mentor/${regis}`)
      .then((response) => {
        console.log(response);
        getUser();
        route.push("/userList");
      })
      .catch((error) => console.log(error));
  };

  const InputData = (e) => {
    e.preventDefault;
    let newEdit = { ...edit };
    newEdit[e.target.name] = e.target.value;
    setEdit(newEdit);
  };

  useEffect(() => {
    getUser();
  });

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
                        Edit User
                      </p>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="flex flex-col">
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="FullName"
                          onChange={(e) => InputData(e)}
                        />
                      </div>

                      <div className="flex flex-col">
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Email"
                          onChange={(e) => InputData(e)}
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Team"
                          onChange={(e) => InputData(e)}
                        />
                      </div>

                      {/* radio */}
                      <div className="flex flex-col">
                        <p className="text-xs flex justify-center ">
                          Choose a Active or Non-Active for from
                        </p>
                        <input
                          type="Text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Status"
                          onChange={(e) => InputData(e)}
                        />
                      </div>
                      {/* Role */}
                      <div className="flex flex-col">
                        <p className="text-xs flex justify-center ">
                          Choose a Admin or Default for from
                        </p>
                        <input
                          name="role"
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Role"
                          onChange={(e) => InputData(e)}
                        />
                      </div>
                      <div className="flex justify-center">
                        <Button
                          onClick={() => {
                            route.push("/userList");
                          }}
                          className="flex justify-center text-slate-500 ml-3 h-8 w-48 "
                          variant="outlined"
                          onSubmit={(e) => handleEditUser(e)}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
