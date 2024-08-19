/* eslint-disable react/prop-types */
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { useState, useContext } from "react";
import Modal from "./Modal";
import { UserProgressContext } from "../../store/UserProgressContext";
import Cart from "./Cart";
function Header({ children }) {
  const [isActive, setISActive] = useState(false);

  const userProgressCtx = useContext(UserProgressContext);

  function handlehideCart() {
    userProgressCtx.hideCart();
  }

  function handleMenu() {
    setISActive((prevState) => !prevState);
  }
  return (
    <>
      <Modal
        open={userProgressCtx.progress === "cart"}
        onClose={userProgressCtx.progress === "cart" ? handlehideCart : null}
      >
        <Cart closeCart={handlehideCart} />
      </Modal>
      <header className=" relative bg-[#1a1a1a] ">
        {isActive && <MobileMenu handleMenu={handleMenu} isActive={isActive} />}
        <NavBar handleMenu={handleMenu} />
        {children}
      </header>
    </>
  );
}

export default Header;
