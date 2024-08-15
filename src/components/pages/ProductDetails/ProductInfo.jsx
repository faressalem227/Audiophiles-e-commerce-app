/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../layout/Button";

function ProductInfo({ product }) {
  const [productQuantity, setProductQuantity] = useState(0);

  function handleIncreaseQuantity() {
    setProductQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecreaseQuantity(e) {
    if (productQuantity === 0) {
      e.preventDefault();
    } else {
      setProductQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  const isNew = product.new;

  return (
    <section className="font-ManRope flex flex-col lg:flex-row justify-center gap-4 lg:gap-24 my-16">
      <div className="h-[450px] flex justify-center">
        <img
          src={product.image.mobile}
          alt="product image"
          className="md:hidden rounded-md"
        />
        <img
          src={product.image.tablet}
          alt="product image"
          className="w-[450px] hidden md:block lg:hidden rounded-md"
        />
        <img
          src={product.image.desktop}
          alt="product image"
          className="hidden lg:block rounded-md"
        />
      </div>
      <div className="flex flex-col gap-5 items-center lg:items-start self-center lg:p-6">
        {isNew && (
          <p className="text-main_orange text-base w-fit mx-auto md:mx-0">
            NEW PRODUCT
          </p>
        )}
        <h2 className="w-[400px] text-black font-bold text-2xl md:text-3xl lg:text-5xl text-center lg:text-left">
          {product.name}
        </h2>
        <p className="p-3 lg:w-[450px] text-gray-500 text-center lg:text-left text-lg font-light">
          {product.description}
        </p>
        <div className="p-5 flex gap-4">
          <div className="w-[100px] flex justify-around items-center bg-main_grey">
            <button className="text-gray-500" onClick={handleDecreaseQuantity}>
              -
            </button>
            <p className="font-semibold">{productQuantity}</p>
            <button className="text-gray-500" onClick={handleIncreaseQuantity}>
              +
            </button>
          </div>
          <Button orangeBtn>ADD TO CART</Button>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
