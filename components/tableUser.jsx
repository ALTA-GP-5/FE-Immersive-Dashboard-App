import React, { useState } from "react";
import { useRouter } from "next/router";

const TableUser = ({
  listUser,
  table,
  Fullname,
  Email,
  Team,
  Roles,
  Status,
}) => {
  const route = useRouter();

  return (
    <div className=" flex justify-center mt-10 ">
      <table className=" sp:text-[8px] xs:text-xs sm:text-lg snap-mandatory snap-x row-border pb-[72px] mt-10 py-[26px] table-auto border-separate border-spacing-x-2 sm:border-spacing-x-12 border-x-[1px] border-b-[1px] border-slate-500 text-center rounded-b-lg">
        <thead>
          <tr className="snap-mandatory snap-x ">
            <th className="hilang:hidden">No.</th>
            {listUser.map((item, index) => {
              return (
                <th className="snap-center  " key={index}>
                  {item}
                </th>
              );
            })}
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <>
            <tr
              className="text-left border-[#bababa] border-b-[1px] text-sm "
              style={{ border: "1px solid #000" }}
              // key={index}
            >
              {/* <td className="hilang:hidden">{index + 1}</td> */}
              <td>{Fullname}</td>
              <td>{Email}</td>
              <td>{Team}</td>
              <td>{Roles}</td>
              <td>{Status}</td>
              <td>
                <button
                  onClick={() => {
                    route.push("/editUser");
                  }}
                  className="flex text-slate-900  ml-1"
                  variant="outlined"
                >
                  🖊️
                </button>
              </td>
              <td>
                <button
                  className="flex text-slate-900  ml-1  "
                  variant="outlined"
                >
                  🗑️
                </button>
              </td>
            </tr>
          </>
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
