import { HiUsers } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import { Tooltip, Whisper } from "rsuite";
import { useContext } from "react";
import { QuizContext } from "../../contexts/QuizContext";

const dashboardNav = [
  {
    title: "Sets",
    to: "/",
  },
  { title: "Members", to: "/members" },
  { title: "Progress", to: "/progress" },
];
const addSetTip = <Tooltip arrow={false}>Add Set</Tooltip>;
const addMemberTip = <Tooltip arrow={false}>Add Member</Tooltip>;
const createFolderTip = <Tooltip arrow={false}>create folder</Tooltip>;
const moreTip = <Tooltip arrow={false}>more</Tooltip>;

const Dashboard = () => {
  const { openModal, setOpenModal } = useContext(QuizContext);

  const handleModalopen = () => {
    setOpenModal((prev) => {
      return { ...prev, open: true, modal: "Create Quiz" };
    });
  };

  return (
    <div className="px-4 py-2">
      <h2 className="flex items-center my-7 justify-start text-5xl font-bold text-textColor">
        <HiUsers />
        class_pseudo
      </h2>

      {/* <span className="w-[100%] flex items-center justify-between p-4 rounded-lg border-primaryBorderColor border-4 ">
        <div>
          <h5 className="font-bold text-2xl text-textColor">
            Help every student gain confidence and succeed.
          </h5>
          <p className="font-thin text-textColor">
            Better engagement and powerful insights with QUIZio Plus for
            teachers.
          </p>
        </div>

        <span className="basis-1/4 flex items-center justify-around">
          <button className="bg-inherit text-textColor p-2 rounded-md border-primaryBorderColor border-4">
            Not Now
          </button>

          <button className="bg-yellowBtnBg p-2 font-bold rounded-md">
            Try it for 30 days.
          </button>
        </span>
      </span> */}

      <span className="w-[100%] my-7 flex items-center justify-start">
        <Whisper
          placement="bottom"
          controlId="control-id-hover"
          trigger="hover"
          speaker={addSetTip}
          onClick={handleModalopen}
        >
          <button className=" flex me-2 items-center justify-center rounded-full w-[45px] h-[45px] text-textColorLight border-primaryBorderColor border-4">
            <IoAddSharp
              className="text-textColor hover:opacity-50 "
              size={26}
            />
          </button>
        </Whisper>

        <Whisper
          placement="bottom"
          controlId="control-id-hover"
          trigger="hover"
          speaker={addMemberTip}
        >
          <button className="p-2 flex me-2 items-center justify-center rounded-full w-[45px] h-[45px] text-textColorLight border-primaryBorderColor border-4">
            <FiUserPlus
              className="text-textColor hover:opacity-50 "
              size={26}
            />
          </button>
        </Whisper>

        <Whisper
          placement="bottom"
          controlId="control-id-hover"
          trigger="hover"
          speaker={createFolderTip}
        >
          <button className="p-2 flex me-2 items-center justify-center rounded-full w-[45px] h-[45px] text-textColorLight border-primaryBorderColor border-4">
            <FaRegFolder
              className="text-textColor hover:opacity-50"
              size={26}
            />
          </button>
        </Whisper>

        <Whisper
          placement="bottom"
          controlId="control-id-hover"
          trigger="hover"
          speaker={moreTip}
        >
          <button className=" p-2 flex items-center justify-center rounded-full w-[45px] h-[45px] text-textColorLight border-primaryBorderColor border-4">
            <BsThreeDots
              className="text-textColor hover:opacity-50"
              size={26}
            />
          </button>
        </Whisper>
      </span>

      {/* ===========dashboard navs============ */}
      {/* <span className="w-[100%]  flex items-center justify-start"> */}
      <ul className="w-[100%] my-7  border-b-2 border-primaryBorderColor flex justify-start p-0 pb-1 m-0 items-center">
        {dashboardNav?.map((item, index) => (
          <li
            key={index}
            className="mr-3 font-bold text-textColor hover:text-textColorGray"
          >
            <NavLink
              className="nav-link pb-1 m-0"
              to={item?.to}
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: "var(--active-nav-color)",
                      borderBottom: "3px solid var(--active-nav-color)",
                    }
                  : {};
              }}
            >
              {item?.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* </span> */}

      {/* =========components outlet======== */}
      <Outlet />
    </div>
  );
};

export default Dashboard;