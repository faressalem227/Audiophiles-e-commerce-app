import NavBar from "../../layout/NavBar";
import Button from "../../layout/Button";
import MobileMenu from "../../layout/MobileMenu";
import { useState } from "react";
function HomeHeader() {
  const [isActive, setISActive] = useState(false);

  function handleMenu() {
    setISActive((prevState) => !prevState);
  }

  return (
    <header>
      {isActive && <MobileMenu handleMenu={handleMenu} isActive={isActive} />}
      <NavBar handleMenu={handleMenu} />
    </header>
  );
}

export default HomeHeader;
