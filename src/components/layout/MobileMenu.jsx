import ListItem from "./ListItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function MobileMenu({ handleMenu }) {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.clear();
    setAuth(null);
    return navigate("/");
  };

  return (
    <div className=" bg-black absolute w-full h-svh p-5 md:hidden z-10">
      <div className=" flex justify-between items-center">
        <h4 className=" text-xl text-main_orange text-center mb-4">pages</h4>
        <button onClick={handleMenu}>
          <svg
            className="fill-white  hover:fill-main_orange duration-300"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <rect id="Rectangle" width="16" height="3" />
              <rect id="Rectangle Copy" y="6" width="16" height="3" />
              <rect id="Rectangle Copy 2" y="12" width="16" height="3" />
            </g>
          </svg>
        </button>
      </div>

      <span className=" block h-[1px] bg-binary_black mb-4"></span>
      <menu className="flex flex-col gap-5 items-center">
        <ListItem path="/">HOME</ListItem>
        <ListItem path="/Headphones">HEADPHONES</ListItem>
        <ListItem path="/Speakers">SPEAKERS</ListItem>
        <ListItem path="/Earphones">EARPHONES</ListItem>
        <ListItem path="/About US">ABOUT US</ListItem>
        {auth === null ? (
            <>
              <ListItem isLogin
                path='/login'
              >
                LOGIN
              </ListItem>
              <ListItem isLogin
                path="/register"
              >
                SIGNUP
              </ListItem>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-main_orange text-white"
            >
              LOGOUT
            </button>
          )}
      </menu>
    </div>
  );
}

export default MobileMenu;
