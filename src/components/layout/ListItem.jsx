/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function ListItem({ isLogin, children, path, handleMenu }) {
  const IsLoginClass =
    "text-main_orange hover:text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-main_orange after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";
  const cssClass =
    "text-white hover:text-main_orange relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-main_orange after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";
  return (
    <li className=" text-[13px] w-fit">
      <button onClick={handleMenu}>
        <Link to={path} className={isLogin ? IsLoginClass : cssClass}>
          {children}
        </Link>
      </button>
    </li>
  );
}

export default ListItem;