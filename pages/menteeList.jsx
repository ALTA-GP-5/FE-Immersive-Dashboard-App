import React, { useState } from "react";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import TableList from "../components/tableList";

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
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [value2, setValue2] = React.useState(options[0]);
  const [inputValue2, setInputValue2] = React.useState("");

  const [value3, setValue3] = React.useState(options[0]);
  const [inputValue3, setInputValue3] = React.useState("");

  const [listFil, setListFil] = useState([
    "Nama",
    "Kelas",
    "Status",
    "Category",
    "Gender",
    "Detail",
  ]);
  const [table, setTable] = useState([
    {
      Nama: "Uzumaki Boruto",
      Kelas: "QE 7",
      Status: "Active",
      Category: "IT",
      Gender: "Male",
    },
    {
      Nama: "Uzumaki Himawari",
      Kelas: "BE 11",
      Status: "Unit 1",
      Category: "Non IT",
      Gender: "Female",
    },
    {
      Nama: "Uzumaki borutot",
      Kelas: "QE 7",
      Status: "Active",
      Category: "IT",
      Gender: "Male",
    },
  ]);

  return (
    <>
      {" "}
      {/* pembuka search  */}
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
          <Button className="flex  text-slate-900 ml-3 " variant="outlined">
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
      <TableList listFil={listFil} table={table} />
    </>
  );
};

export default MenteeList;
