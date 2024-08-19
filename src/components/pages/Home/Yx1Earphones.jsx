import Button from "../../layout/Button";
import { Link } from "react-router-dom";

function Yx1Earphones() {
  return (
    <div className="  flex flex-col md:flex-row gap-4 ">
      <div className=" flex-1 rounded-md">
        <img src="/products/assets/home/mobile/image-earphones-yx1.jpg" alt="" className=" md:hidden rounded-md" />
        <img
          src="/products/assets/home/tablet/image-earphones-yx1.jpg"
          alt=""
          className="hidden md:block lg:hidden rounded-md"
        />
        <img
          src="/products/assets/home/desktop/image-earphones-yx1.jpg"
          alt=""
          className=" w-full hidden lg:block rounded-md"
        />
      </div>
      <div className=" bg-Neutral_grey flex flex-col items-center md:items-start flex-1 justify-center gap-6 rounded-md p-10">
        <h2 className="font-bold text-xl sm:text-2xl m:text-3xl lg:text-5xl">
          YX1 EARPHONES
        </h2>
        <Button>
          <Link to="products/yx1-earphones">See Product</Link>
        </Button>
      </div>
    </div>
  );
}

export default Yx1Earphones;
