import React from "react";
import { NavLink } from "react-router-dom";
import { HiBuildingLibrary } from "react-icons/hi2";
import { IoCopy } from "react-icons/io5";
import { FaUsersViewfinder } from "react-icons/fa6";

const Sets = () => {
  return (
    <span className="min-h-96 flex text-textColor">
      {/* ========left section========== */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-bold text-3xl text-center">
          Study sets make it easy for class members to study your content in
          activities like Learn and Test.
        </h3>
        <button className="w-[200px] my-4 rounded-md p-4 bg-btnBgColor font-bold text-textColorLight">
          Add a study set
        </button>
        <NavLink className="text-textColorGray font-bold ">
          Browse study sets
        </NavLink>
      </div>
      {/* =======right section======= */}
      <div className="basis-2/6 flex flex-col justify-start">
        <div>
          <h4 className="font-bold">INVITE LINK</h4>
          <span className="w-[100%] flex justify-between">
            <p className="rounded-md p-1 border-4 border-primaryBorderColor">
              https://quizio.com/join/WaT4ygHXW
            </p>
            <button className="w-[100px] p-0 m-0 rounded-md py-2 bg-btnBgColor font-bold text-textColorLight">
              Copy
            </button>
          </span>
        </div>
        {/* ====details==== */}
        <div className=" mt-4 flex flex-col items-start">
          <h4 className="font-bold">CLASS DETAILS</h4>
          <p className="p-1 mb-4 flex items-center justify-start">
            <HiBuildingLibrary size={26} className="mr-4" />
            Rework Academy, Durumi
          </p>
          <p className="p-1 mb-4 flex items-center justify-start">
            <IoCopy size={26} className="mr-4" />0 sets
          </p>
          <p className="p-1 mb-4 flex items-center justify-start">
            <FaUsersViewfinder size={26} className="mr-4" />1 member
          </p>
        </div>
      </div>
    </span>
  );
};

export default Sets;