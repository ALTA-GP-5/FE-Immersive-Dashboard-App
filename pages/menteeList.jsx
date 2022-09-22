import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import axios from "axios";

const options = ["QE 7", "FE 8", "BE 11"];
const options2 = [
  "Interview",
  "Join Class",
  "Unit 1",
  "Unit 2",
  "Unit 3",
  "Repeat Unit 1",
  "Repeat Unit 2",
  "Repeat Unit 3",
  "Placement",
  "Eliminate",
  "Active",
  "Non Active",
  "Graduated",
];
const options3 = ["Informatict", "Non-Informatict"];

const MenteeList = () => {
  const route = useRouter();
  const [mentee, setMentee] = useState([]);

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [value2, setValue2] = React.useState(options[0]);
  const [inputValue2, setInputValue2] = React.useState("");

  const [value3, setValue3] = React.useState(options[0]);
  const [inputValue3, setInputValue3] = React.useState("");

  const getMentee = () => {
    axios
      .get("https://immersiveapp.site/mentees")
      .then((response) => {
        setMentee(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteUser = (mentee) => {
    axios
      .delete(`https://immersiveapp.site/mentee/${mentee}`)
      .then((response) => {
        console.log(response);
        getMentee();
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getMentee();
  }, []);

  return (
    <>
      <div className="flex w-screen h-screen">
        <Sidebar />

        <div className="w-screen">
          {" "}
          {/* pembuka search  */}
          <div className=" shadow-sm bg-gray-200 w-full h-24 p-4 justify-between  ">
            <div className="space-x-3  ">
              <div className="flex justify-between">
                <h1 className="font-bold  text-xl text-slate-500 ml-3">
                  Immersive Dashboard
                </h1>
                <h1 className=" font-bold text-xl text-slate-900 mr-10 mt-3">
                  Halo, Sayang..
                </h1>
              </div>
              <h1 className="font-bold text-lg text-slate-500 ">Mentee list</h1>
            </div>
            <hr />
          </div>
          <div>
            <form className="flex absolute top-15 right-10 mt-10  padding-2">
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
                  route.push("/addmentee");
                }}
                className="flex  text-slate-900 ml-3 "
                variant="outlined"
              >
                Add new
              </Button>
            </form>
          </div>
          {/* penutup search */}
          {/* pembuka selector value 1*/}
          <div className="flex mt-24 ml-72">
            <div className="flex mt-10">
              <br />
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 150 }}
                renderInput={(params) => (
                  <TextField {...params} label="All Class" />
                )}
              />
            </div>
            {/* penutup selector value 1*/}

            {/* value 2 */}

            <div className="flex mt-10 ml-5 ">
              <br />
              <Autocomplete
                value2={value2}
                onChange={(event, newValue2) => {
                  setValue2(newValue2);
                }}
                inputValue2={inputValue2}
                onInputChange={(event, newInputValue) => {
                  setInputValue2(newInputValue);
                }}
                id="controllable-states-demo"
                options={options2}
                sx={{ width: 150 }}
                renderInput={(params) => (
                  <TextField {...params} label="All Status" />
                )}
              />
            </div>
            {/* value 3 */}
            <div className="flex mt-10 ml-5">
              <br />
              <Autocomplete
                value3={value3}
                onChange={(event, newValue3) => {
                  setValue3(newValue3);
                }}
                inputValue3={inputValue3}
                onInputChange={(event, newInputValue) => {
                  setInputValue3(newInputValue);
                }}
                id="controllable-states-demo"
                options={options3}
                sx={{ width: 150 }}
                renderInput={(params) => (
                  <TextField {...params} label="All Category" />
                )}
              />
            </div>
            <form className="flex absolute top-15 right-10 mt-10  padding-2">
              <Button
                className="flex  text-slate-900 ml-3 h-12 "
                variant="outlined"
              >
                Filter
              </Button>
            </form>
          </div>
          {/* TABLE */}
          <div className="w-9/12 mx-auto  overflow-hidden rounded-lg shadow-xs mt-20">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-no-wrap">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-300 text-gray-200 bg-gray-500">
                    <th className="px-4 py-3 text-center">Name</th>
                    <th className="px-4 py-3 text-center">Class</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-center">Category</th>
                    <th className="px-4 py-3 text-center">Gender</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-700 bg-gray-300">
                  {mentee.map((item) => {
                    return (
                      <>
                        <tr className="text-gray-800" key={item.id}>
                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center text-sm">
                              <p className="font-semibold">{item.name}</p>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center text-sm">
                            {item.class}
                          </td>
                          <td className="px-4 py-3 text-center text-sm">
                            {item.status}
                          </td>
                          <td className="px-4 py-3 text-center text-sm">
                            {item.category}
                          </td>
                          <td className="px-4 py-3 text-center text-sm">
                            {item.gender}
                          </td>

                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center justify-center space-x-4 text-sm">
                              <button
                                className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-green-500 
                                underline focus:outline-none focus:shadow-outline-gray"
                                aria-label="Edit"
                                onClick={() => route.push("/menteeLog")}
                              >
                                detail
                              </button>

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

export default MenteeList;
