import Button from "../../layout/Button";
import EarphoneDesktop from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import EarphoneTablet from "../../../assets/home/tablet/image-earphones-yx1.jpg";
import EarphoneMobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";
function Yx1Earphones() {
  return (
    <div className="  flex flex-col md:flex-row gap-4 ">
      <div className=" flex-1 rounded-md">
        <img src={EarphoneMobile} alt="" className=" md:hidden rounded-md" />
        <img
          src={EarphoneTablet}
          alt=""
          className="hidden md:block lg:hidden rounded-md"
        />
        <img
          src={EarphoneDesktop}
          alt=""
          className=" w-full hidden lg:block rounded-md"
        />
      </div>
      <div className=" bg-Neutral_grey flex flex-col items-center md:items-start flex-1 justify-center gap-6 rounded-md p-10">
        <h2 className="font-bold text-xl sm:text-2xl m:text-3xl lg:text-5xl">
          YX1 EARPHONES
        </h2>
        <Button>See Product</Button>
      </div>
    </div>
  );
}

export default Yx1Earphones;
