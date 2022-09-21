import React, { useState } from "react";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const options = [
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

const NewLog = () => {
  const [value2, setValue2] = React.useState(options[0]);
  const [inputValue2, setInputValue2] = React.useState("");

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
                    New Log
                  </p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* dropdown */}
                  <div className="">
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
                      options={options}
                      sx={{ width: 475 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Status" />
                      )}
                    />
                  </div>

                  {/* Upload */}
                  <div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
                    <div className="mt-10 mb-10 text-center">
                      <h2 className="text-2xl font-semibold mb-2">
                        Upload your files
                      </h2>
                    </div>
                    <form
                      action="#"
                      className="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner"
                    >
                      <input type="file" id="file-upload" className="hidden" />
                      <label
                        for="file-upload"
                        className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                      >
                        <p className="z-10 text-xs font-light text-center text-gray-500">
                          Drag & Drop your files here
                        </p>
                        <svg
                          className="z-10 w-8 h-8 text-indigo-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                        </svg>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              {/* Feedback */}
              <div>
                <input
                  type="text"
                  className=" border focus:ring-gray-500 focus:border-gray-900 w-full h-32 sm:text-sm border-gray-300  focus:outline-none text-gray-600"
                  placeholder="Feedback"
                />
              </div>
              <Button
                className="flex justify-center text-slate-900 mt-5 "
                variant="outlined"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewLog;
