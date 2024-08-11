import BurgerIcon from "../../../assets/BurgerIcon.svg";
import CartIcon from "../../../assets/CartIcon.svg";
import ListItem from "./ListItem";

function NavBar() {
  return (
    <nav className="container p-5 mx-auto ">
      <div className="flex items-center justify-between text-white font-ManRope">
        {/* Burger Menu for Mobile */}
        <button className=" flex-1 md:hidden">
          <img src={BurgerIcon} alt="Menu Icon" />
        </button>

        {/* Brand Name */}
        <p className="text-2xl font-extrabold flex-1 text-center md:text-left">
          audiophile
        </p>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center justify-center flex-1 gap-4">
          <ListItem path="/">HOME</ListItem>
          <ListItem path="/Headphones">HEADPHONES</ListItem>
          <ListItem path="/Speakers">SPEAKERS</ListItem>
          <ListItem path="/Earphones">EARPHONES</ListItem>
        </ul>

        {/* Cart Button */}
        <button className=" flex justify-end flex-1 text-right ">
          <img src={CartIcon} alt="Cart Icon" />
        </button>
      </div>

      {/* Divider */}
      <span className="block w-full h-px mt-6 bg-gray-600"></span>
    </nav>
  );
}

export default NavBar;
