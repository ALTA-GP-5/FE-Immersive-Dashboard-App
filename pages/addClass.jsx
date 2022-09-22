import React, { useState } from "react";
import { Button } from "@mui/material";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import axios from "axios";

const AddClass = () => {
  const route = useRouter();
  const [kelas, setKelas] = useState({
    mentor_id: "",
    name: "",
    status: "",
    start_date: "",
    end_date: "",
  });

  const handleaddKelas = (e) => {
    e.preventDefault();

    var data = JSON.stringify({
      mentor_id: parseInt(kelas.mentor_id),
    });
    axios
      .post("https://immersiveapp.site/class", kelas)
      .then((response) => {
        route.push("/classList");
      })
      .catch((error) => console.log(error));
  };

  const inputKelas = (e) => {
    let newKelas = { ...kelas };
    newKelas[e.target.name] = e.target.value;
    setKelas(newKelas);
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
                        Add Class
                      </p>
                    </div>
                  </div>
                  <form onSubmit={(e) => handleaddKelas(e)}>
                    <div className="divide-y divide-gray-200">
                      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="flex flex-col">
                          <p className="text-xs flex justify-center ">
                            mentor id = 1
                          </p>
                          <input
                            name="data"
                            value={kelas.mentor_id}
                            onChange={(e) => inputKelas(e)}
                            type="number"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="mentor Id"
                          />
                        </div>
                        <div className="flex flex-col">
                          <input
                            name="name"
                            value={kelas.name}
                            onChange={(e) => inputKelas(e)}
                            type="text"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Class name"
                          />
                        </div>
                        <div className="flex flex-col">
                          <input
                            name="status"
                            value={kelas.status}
                            onChange={(e) => inputKelas(e)}
                            type="text"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="status"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-xs flex justify-center ">
                            example 2018-08-22
                          </p>
                          <input
                            name="start_date"
                            value={kelas.start_date}
                            onChange={(e) => inputKelas(e)}
                            type="text"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Start Date"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-xs flex justify-center ">
                            example 2018-10-22
                          </p>
                          <input
                            name="end_date"
                            value={kelas.end_date}
                            onChange={(e) => inputKelas(e)}
                            type="text"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="End Date"
                          />
                        </div>

                        <div className="flex justify-center">
                          <Button
                            type="submit"
                            className="flex justify-center text-slate-500 ml-3 h-8 w-48 "
                            variant="outlined"
                          >
                            Add Class
                          </Button>
                        </div>
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

export default AddClass;
