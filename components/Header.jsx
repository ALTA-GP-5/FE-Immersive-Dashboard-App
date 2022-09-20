import React from "react";

const Header = () => {
  return (
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
        <h1 className="font-bold text-lg text-slate-500 ">Dashboard</h1>
      </div>
      <hr />
    </div>
  );
};

export default Header;
