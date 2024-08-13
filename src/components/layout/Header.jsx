/* eslint-disable react/prop-types */
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
function Header({ title }) {
  const [isActive, setISActive] = useState(false);

  function handleMenu() {
    setISActive((prevState) => !prevState);
  }
  return (
    <header className=" bg-binary_black">
      {isActive && <MobileMenu handleMenu={handleMenu} />}
      <NavBar handleMenu={handleMenu} />
      <section className=" container py-3 px-5 mx-auto">
        <h1 className=" text-white text-center font-semibold text-xl sm:text-2xl md:text-3xl lg-text-4xl my-7 ">
          {title}
        </h1>
      </section>
    </header>
  );
}

export default Header;
