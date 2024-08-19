import { Link } from "react-router-dom";

function Zx9Speacker() {
  return (
    <div className=" relative overflow-hidden bg-main_orange flex flex-col lg:flex-row gap-4 rounded-md bg-PatternCircle bg-no-repeat bg-cover lg:bg-fill bg-center lg:bg-left">
      <div className=" p-3 flex justify-center flex-1 lg:h-[500px]">
        <img src="/products/assets/home/mobile/image-speaker-zx9.png" alt="" className=" md:hidden h-[200px]" />
        <img
          src="/products/assets/home/tablet/image-speaker-zx9.png"
          alt=""
          className=" hidden md:block lg:hidden h-[300px]"
        />
        <img
          src="/products/assets/home/desktop/image-speaker-zx9.png"
          alt=""
          className=" hidden lg:block h-[450px] object-contain absolute bottom-[-10px]"
        />
      </div>
      <div className=" font-ManRope flex flex-col gap-5 items-center lg:justify-center lg:items-start flex-1 p-5">
        <h2 className=" text-white font-bold text-xl sm:text-2xl m:text-3xl lg:text-5xl">
          ZX9 SPEAKER
        </h2>
        <p className=" p-3 w-[350px] text-white text-center lg:text-left text-sm sm:text-base m:text-lg lg:text-xl font-light">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <div>
          <button className="p-3 w-[150px] sm:w-[200px] text-base font-semibold duration-300 text-white  bg-black hover:bg-slate-700">
            <Link to="products/zx9-speaker">See product</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Zx9Speacker;
