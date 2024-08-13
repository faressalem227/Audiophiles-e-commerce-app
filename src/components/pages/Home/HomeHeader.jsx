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
    <header className=" relative h-svh md:h-lvh bg-binary_black bg-mobileHeaderImg md:bg-tabletHeaderImg lg:bg-pcHeaderImg bg-no-repeat bg-cover bg-center">
      {isActive && <MobileMenu handleMenu={handleMenu} />}
      <NavBar handleMenu={handleMenu} />
      <section className=" container p-12 mx-auto mb-10 flex flex-col items-center lg:items-start gap-10  font-ManRope">
        <p className=" text-gray-500 text-[13px] tracking-[10px]">
          NEW PRODUCT
        </p>
        <h1 className=" lg:w-[500px] text-white text-center lg:text-left text-5xl md:text-6xl lg:7xl  font-extrabold ">
          XX99 Mark II Headphones
        </h1>
        <p className=" lg:w-[370px] text-gray-500 text-base text-center lg:text-left">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <div>
          <Button orangeBtn>See Product</Button>
        </div>
      </section>
    </header>
  );
}

export default HomeHeader;
