import React from "react";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const options = ["", "FrontEnd", "BackEnd", "Quality Engineering"];
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

const EditMentee = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [value2, setValue2] = React.useState(options[0]);
  const [inputValue2, setInputValue2] = React.useState("");

  return (
    <>
      <div className="relative   bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-5">
            <div className="h-14 w-14 bg-gray-200 rounded-full flex flex-shrink-0 justify-center items-center text-green-500 text-2xl font-mono">
              LeByDo
            </div>
            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
              <h2 className="leading-relaxed">Learning by Doing</h2>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">
                form edit Mentee
              </p>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Name"
                />
              </div>
              <div>
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
                  sx={{ width: 475 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Status" />
                  )}
                />
              </div>
              <div>
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
                  sx={{ width: 475 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Class" />
                  )}
                />
              </div>
              {/* radio */}
              <div className="main flex  overflow-hidden select-none">
                <div className="title py-1 my-auto px-5 font-semibold">
                  Gender
                </div>
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="title px-2">Male</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="title px-2">Female</div>
                </label>
              </div>
              {/* Datas */}

              {/* radio */}
              <div className="main flex  overflow-hidden select-none">
                <div className="title py-1 my-auto px-5 font-semibold">
                  Category
                </div>
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="title px-2">IT</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="title px-2">Non-IT</div>
                </label>
              </div>

              {/* button */}
              <Button
                className="flex justify-center text-slate-500 ml-3 h-8 w-48 "
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

export default EditMentee;
