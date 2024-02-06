import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import User from "../../../public/img/avatar.png";
import Logo from "../../../public/img/logo.png";
import { Popover, Whisper } from "rsuite";

const navlinks = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Your Library",
    to: "/sets",
    icon: "",
  },
  {
    title: "Expert Solutions",
    to: "/solutions",
  },
];

const profileMenu = (
  <Popover arrow={false}>
    <div>
      <div className="w-[100%] bg-bgColorGray p-4 flex justify-start items-center rounded-md hover:border-b-8 hover:border-b-primaryBorderColor">
        <span className="flex items-center justify-center  w-[70px] h-[70px]">
          <img className="rounded-full" src={User} alt="user-img" />
        </span>
        <div className="ml-4 text-textColor flex flex-col justify-start items-start">
          <p className="">Class Admin</p>
          <h3 className="font-extrabold text-lg">Adekunle Chukwuma</h3>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  </Popover>
);

const Topnav = () => {
  return (
    <nav className="bg-bgWhite px-4 py-2 basis-[3rem] flex flex-row fixed top-0 left-0 w-[100vw] border-b-[1px] border-[#2E3856] justify-between">
      <span className=" basis-2/6 flex items-center justify-between">
        {/* ======logo======== */}
        <div className="flex cursor-pointer  ">
          <Link to="/" className="no-underline">
            <span className="flex items-center p-2 w-[70%]">
              <img
                className="mr-[1px] w-[35px] h-[35px]"
                src={Logo}
                alt="logo-img"
              />
              <h6 className="font-bold text-[#00AFEF] ">QUIZio</h6>
            </span>
          </Link>
        </div>
        {/* //   ===logo-end===== */}

        <ul className="basis-2/3 flex items-center justify-between">
          {navlinks?.map((nav, index) => (
            <li className="fw-bold text-textColor" key={index}>
              <NavLink to={nav?.to}>{nav?.title}</NavLink>
            </li>
          ))}
        </ul>
      </span>

      {/*=====search bar=====*/}
      <span className="basis-2/6 flex items-center">
        {/* ========search========= */}
        <div
          className="flex items-center p-1 rounded-full w-[95%] bg-bgColorLight "
          // style={{ backgroundColor: "transparent" }}
        >
          <CiSearch className="text-textColorGray" size={20} />
          <input
            type="text"
            className="text-[#050914] p-2 font-bold"
            style={{
              backgroundColor: "inherit",
              border: "none",
              outline: "none",
              width: "95%",
              height: "25px",
            }}
            placeholder="Ask QUIZio anything"
          />
        </div>
      </span>

      {/* =====user avatar and other notifications==== */}
      <span className=" basis-1/6 flex items-center justify-around">
        <button className="p-0 flex items-center justify-center rounded-full w-[40px] h-[40px] bg-btnBgColor text-textColorLight ">
          <IoAddSharp className="" size={26} />
        </button>
        {/* ===user avatar==== */}
        <Whisper placement="bottomEnd" trigger="click" speaker={profileMenu}>
          <span className="flex hover:cursor-pointer items-center justify-center  w-[40px] h-[40px]">
            <img className="rounded-full" src={User} alt="user-img" />
          </span>
        </Whisper>

        <button className="bg-yellowBtnBg p-2 font-bold rounded-md">
          Free Trial
        </button>
      </span>
    </nav>
  );
};

export default Topnav;
