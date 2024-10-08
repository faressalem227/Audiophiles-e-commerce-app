/* eslint-disable react/prop-types */
import Button from "../layout/Button";
import { Link } from "react-router-dom";
function CategogryProduct({ slug, isNew, name, description, images, index, id }) {
  const Images = {
    ...images,
  };

  let imgMob = '';
  let imgTab = '';
  let imgDes = '';
  
  if(id.length > 1) {
    imgMob = `https://localhost:44355/Product/${Images.mobile}`;
    imgTab = `https://localhost:44355/Product/${Images.tablet}`;
    imgDes = `https://localhost:44355/Product/${Images.desktop}`;
  } else {
    imgMob = `${Images.mobile}`;
    imgTab = `${Images.tablet}`;
    imgDes = `${Images.desktop}`;
  }

  let imgClass = "h-[450px] flex justify-center";

  if (index % 2 !== 0) {
    imgClass += " lg:order-2";
  }

  return (
    <div className=" flex flex-col lg:flex-row justify-center gap-4 lg:gap-24 my-16 ">
      <div className={imgClass}>
        <img src={imgMob} alt="" className=" md:hidden rounded-md" />
        <img
          src={imgTab}
          alt=""
          className=" w-[450p] hidden md:block lg:hidden rounded-md"
        />
        <img
          src={imgDes}
          alt=""
          className="  hidden lg:block rounded-md"
        />
      </div>
      <div className=" flex flex-col gap-5 items-center lg:items-start self-center lg:p-6 ">
        {isNew && (
          <p className=" text-main_orange text-base w-fit mx-auto md:mx-0">
            NEW PRODUCT
          </p>
        )}
        <h2 className=" w-[400px] text-black font-bold text-2xl md:text-3xl  lg:text-5xl text-center lg:text-left">
          {name}
        </h2>
        <p className=" p-3 lg:w-[450px] text-gray-500 text-center lg:text-left text-lg font-light ">
          {description}
        </p>
        <Button orangeBtn>
          <Link to={`/products/${slug}`} className=" w-full">
            see product{" "}
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default CategogryProduct;
