import React from "react";
import Card from "../components/card";
import LineCard from "../components/lineCard";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
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
                  Hallo, Sayang..
                </h1>
              </div>
              <h1 className="font-bold text-lg text-slate-500 ">Dashboard</h1>
            </div>
            <hr />
          </div>
          <Card />
          <LineCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
