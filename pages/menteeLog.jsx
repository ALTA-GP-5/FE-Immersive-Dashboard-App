import React from "react";
import { Button } from "@mui/material";

import Table from "../components/table";

const MenteeLog = () => {
  // const [listMentee, setListMentee] = useState(["NamaKelas", "Mentor"]);
  // const [table, setTable] = useState([
  //   { NamaKelas: "Front-end Batch 7", Mentor: "Yoga Devanada" },
  //   { NamaKelas: "Front-end Batch 7", Mentor: "Yoga Devanada" },
  //   { NamaKelas: "Front-end Batch 8", Mentor: "Bagas Adhitiya" },
  //   { NamaKelas: "Front-end Batch 8", Mentor: "Bagas Adhitiya" },
  //   { NamaKelas: "Back-end Batch 10", Mentor: "Jerry Young" },
  //   { NamaKelas: "Back-end Batch 10", Mentor: "Jerry Young" },
  //   { NamaKelas: "Back-end Batch 11", Mentor: "Fachkry" },
  //   { NamaKelas: "Back-end Batch 11", Mentor: "Fachkry" },
  // ]);

  return (
    <>
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
          <h1 className="font-bold text-lg text-slate-500 ">Mentee Log</h1>
        </div>
        <hr />
      </div>
      {/* penutup header */}
      {/* pembuka kontak */}
      <div className=" flex w-full justify-between mt-5">
        <div className="ml-10">
          <p className="font-bold text-2xl ">Wahyu Ramadhan</p>
          <p className="font-bold">Wuling Engineer</p>
          <p className="font-bold">IPA</p>
          <p className="font-bold">SMA Negeri 1 Citayem</p>
        </div>
        <div className="mr-10">
          <p className="font-bold">Phone : 082135978699</p>
          <p className="font-bold">Telegram : @SuperWhy</p>
          <p className="font-bold">Discord : @SuperWhy#4921</p>
          <p className="font-bold">Email: superwhy@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-end mr-10">
        <Button className="flex text-slate-900  ml-3" variant="outlined">
          Add new
        </Button>
      </div>
      <div className="ml-10 mr-10">
        <div className="bg-[#E8E9EB] mt-2 flex justify-between">
          <div className="mr-10">
            <p className="font-bold">Interview</p>
            <p className="font-bold">Revin</p>
            <p className="flex text-xs">Sep 20, 2022</p>
          </div>
          <div className="ml-10 mr-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur praesentium magnam explicabo quidem, delectus
              repudiandae quis eaque reprehenderit possimus voluptatum a
              necessitatibus itaque id sapiente doloremque totam numquam. Nemo,
              rem? aku tak peduli, kau hianati hati ini kau curangi aku..
            </p>
            <p className="mt-3">Change Status : Continue Section 2⏰</p>
          </div>
        </div>
      </div>
      <div className="ml-10 mr-10">
        <div className="bg-[#E8E9EB] mt-2 flex justify-between">
          <div className="mr-10">
            <p className="font-bold">Interview</p>
            <p className="font-bold">Revin</p>
            <p className="flex text-xs">Sep 20, 2022</p>
          </div>
          <div className="ml-10 mr-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur praesentium magnam explicabo quidem, delectus
              repudiandae quis eaque reprehenderit possimus voluptatum a
              necessitatibus itaque id sapiente doloremque totam numquam. Nemo,
              rem? aku tak peduli, kau hianati hati ini kau curangi aku..
            </p>
            <p className="mt-3">Change Status : Continue Section 2⏰</p>
          </div>
        </div>
      </div>
      <div className="ml-10 mr-10">
        <div className="bg-[#E8E9EB] mt-2 flex justify-between">
          <div className="mr-10">
            <p className="font-bold">Interview</p>
            <p className="font-bold">Revin</p>
            <p className="flex text-xs">Sep 20, 2022</p>
          </div>
          <div className="ml-10 mr-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur praesentium magnam explicabo quidem, delectus
              repudiandae quis eaque reprehenderit possimus voluptatum a
              necessitatibus itaque id sapiente doloremque totam numquam. Nemo,
              rem? aku tak peduli, kau hianati hati ini kau curangi aku..
            </p>
            <p className="mt-3">Change Status : Continue Section 2⏰</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenteeLog;
