// import { NavLink } from "react-router-dom";
import { HiBuildingLibrary } from "react-icons/hi2";
import { IoCopy } from "react-icons/io5";
import { FaUsersViewfinder } from "react-icons/fa6";
import User from "../../../public/img/avatar.png";
import { NavLink } from "react-router-dom";

const Members = () => {
  return (
    <span className="min-h-96 flex  text-textColor">
      {/* ========left section========== */}
      <div className=" w-[95%] flex flex-col justify-center items-center">
        <h3 className="font-extrabold text-3xl text-center">
          Share this join link with your students
        </h3>
        <h3 className="my-4 text-xl text-center">
          Help your students excel by inviting them to this class
        </h3>
        <p className="py-6 px-16 my-4 bg-slate-950 ">
          https://quizio.com/join/WaT4ygHXW?i=5njwt9&x=1rqt
        </p>
        <button className="w-[200px] my-4 rounded-md p-4 bg-btnBgColor font-bold text-textColorLight">
          Copy link
        </button>

        {/* ===members sections ======= */}
        <div className="mt-6 min-h-44 w-[100%]">
          <span className="flex items-center">
            <p className="font-bold m-0 p-0 ">MEMBERS</p>
            <span className=" basis-11/12 h-[1px] bg-bgColor ml-2" />
          </span>
          {/* ====list of all class members */}
          <NavLink className="w-[100%] bg-bgColorGray p-4 flex justify-start items-center rounded-md hover:border-b-8 hover:border-b-primaryBorderColor">
            <span className="flex items-center justify-center  w-[70px] h-[70px]">
              <img className="rounded-full" src={User} alt="user-img" />
            </span>
            <div className="ml-4 text-textColor flex flex-col justify-start items-start">
              <p className="">Class Admin</p>
              <h3 className="font-extrabold text-lg">Adekunle Chukwuma</h3>
            </div>
          </NavLink>
        </div>
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

export default Members;
