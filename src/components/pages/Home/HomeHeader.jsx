import NavBar from "../../layout/NavBar";
import Button from "../../layout/Button";
function HomeHeader() {
  return (
    <header className=" h-svh md:h-lvh bg-binary_black bg-mobileHeaderImg md:bg-tabletHeaderImg lg:bg-pcHeaderImg bg-no-repeat bg-cover bg-center">
      <NavBar />
      <section className=" container p-12 mx-auto mb-10 flex flex-col items-center md:items-start gap-14 md:gap-10  font-ManRope">
        <p className=" text-main_grey text-[13px] tracking-[10px]">
          NEW PRODUCT
        </p>
        <h1 className=" text-white text-center md:text-left text-5xl md:text-6xl lg:7xl  font-extrabold ">
          XX99 Mark II Headphones
        </h1>
        <p className=" text-main_grey text-base text-center">
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
