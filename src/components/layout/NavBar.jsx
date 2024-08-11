import BurgerIcon from "../../assets/BurgerIcon.svg";
import CartIcon from "../../assets/CartIcon.svg";

function NavBar() {
  return (
    <nav className="container p-4 m-auto bg-black font-ManRope flex justify-between items-center text-white">
      <div className="order-1 sm:hidden">
        <img src={BurgerIcon} alt="list Icon" />
      </div>
      <p className="  font-extrabold text-2xl order-2 ">audiophile</p>
      <div className=" order-3">
        <img src={CartIcon} alt="cart Icon" />
      </div>
    </nav>
  );
}

export default NavBar;
