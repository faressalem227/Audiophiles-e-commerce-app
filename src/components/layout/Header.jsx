/* eslint-disable react/prop-types */
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
function Header({ children }) {
  const [isActive, setISActive] = useState(false);

  function handleMenu() {
    setISActive((prevState) => !prevState);
  }
  return (
    <header className=" relative bg-[#1a1a1a] ">
      {isActive && <MobileMenu handleMenu={handleMenu} isActive={isActive} />}
      <NavBar handleMenu={handleMenu} />
      {children}
    </header>
  );
}

export default Header;
