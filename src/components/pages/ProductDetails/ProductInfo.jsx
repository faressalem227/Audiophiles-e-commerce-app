/* eslint-disable react/prop-types */
import CartButton from "../../layout/CartButton";
import Button from "../../layout/Button";
import CartContext from "../../../store/CartContext";
import { UserProgressContext } from "../../../store/UserProgressContext";
import { useContext } from "react";
function ProductInfo({ product }) {
  // Changes Based on Custom Added API For Images Uploading
  let imgMob = '';
  let imgTab = '';
  let imgDes = '';
  
  if(product.id.length > 1) {
    imgMob = `https://localhost:44355/Product/${product.image.mobile}`;
    imgTab = `https://localhost:44355/Product/${product.image.tablet}`;
    imgDes = `https://localhost:44355/Product/${product.image.desktop}`;
  } else {
    imgMob = `${product.image.mobile}`;
    imgTab = `${product.image.tablet}`;
    imgDes = `${product.image.desktop}`;
  }



  const isNew = product.new;

  const CartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  function handelShowCart(params) {
    userProgressCtx.showCart();
  }

  const currentCartProductIndex = CartCtx.cartProducts.findIndex(
    (cartProduct) => cartProduct.id === product.id
  );

  const productQuantity =
    currentCartProductIndex > -1
      ? CartCtx.cartProducts[currentCartProductIndex].quantity
      : 0;

  function handleAddProductToCart() {
    CartCtx.addProduct(product);
  }

  function handleRemoveProductFromCart() {
    CartCtx.removeProduct(product.id);
  }

  return (
    <section className="font-ManRope flex flex-col lg:flex-row justify-center gap-4 lg:gap-24 my-16">
      <div className="h-[450px] flex justify-center">
        <img
          src={imgMob}
          alt="product image"
          className="md:hidden rounded-md"
        />
        <img
          src={imgTab}
          alt="product image"
          className="w-[450px] hidden md:block lg:hidden rounded-md"
        />
        <img
          src={imgDes}
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
          <CartButton
            addProduct={handleAddProductToCart}
            removeProduct={handleRemoveProductFromCart}
            productQuantity={productQuantity}
            bgColor={`bg-main_grey`}
          />
          <Button orangeBtn onClick={handelShowCart}>
            ADD TO CART
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;