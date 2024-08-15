/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function ListItem({ children, path, handleMenu }) {
  return (
    <li className=" text-[13px] w-fit">
      <button onClick={handleMenu}>
        <Link
          to={path}
          className="text-white hover:text-main_orange relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-main_orange after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          {children}
        </Link>
      </button>
    </li>
  );
}

export default ListItem;
