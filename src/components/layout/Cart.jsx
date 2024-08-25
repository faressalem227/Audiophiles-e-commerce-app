/* eslint-disable react/prop-types */
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
function Cart({ closeCart }) {
  const CartCtx = useContext(CartContext);

  function getCartProductsFromLocalStorage() {
    const storedCartProducts = localStorage.getItem("cartProducts");
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  }

  const cartProducts = getCartProductsFromLocalStorage();

  const totalAmount = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  function handleClearCart() {
    CartCtx.clearCart();
  }

  return (
    <div className=" font-ManRope bg-main_grey  p-5 ">
      <div className="flex justify-between mb-9">
        <h3 className=" font-bold uppercase text-2xl">
          CART ({cartProducts.length})
        </h3>
        <div>
          <button
            onClick={handleClearCart}
            className=" font-base bg-transparent text-gray-500 hover:text-main_orange duration-300 text-2xl border-0 outline-none"
          >
            Remove all
          </button>
        </div>
      </div>
      <div className="space-y-4 mb-9 flex flex-col gap-4">
        {cartProducts.map((cartProduct) => {
          console.log(cartProduct);

          function handleAddProductToCart() {
            CartCtx.addProduct(cartProduct);
          }

          function handleRemoveProductFromCart() {
            CartCtx.removeProduct(cartProduct.id);
          }
          return (
            <div
              key={cartProduct.id}
              className="flex justify-between items-center gap-14 "
            >
              <div className="flex items-center ">
                <img
                  src={cartProduct.id.length > 1? `https://localhost:44355/Product/${cartProduct.image.mobile}` : cartProduct.image.mobile}
                  alt={cartProduct.name}
                  className="mr-4 w-16 h-16 rounded-lg"
                />
                <div>
                  <h2 className=" text-base md:text-lg font-medium">
                    {cartProduct.name.split(" ", 2).join(" ")}
                  </h2>
                  <p className="text-gray-600 ">${cartProduct.price}</p>
                </div>
              </div>
              <CartButton
                addProduct={handleAddProductToCart}
                removeProduct={handleRemoveProductFromCart}
                productQuantity={cartProduct.quantity}
                bgColor={`bg-gray-200`}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-between my-9">
        <p className="text-gray-500 uppercase">Total</p>
        <p className="text-lg  font-bold">${totalAmount.toFixed(2)}</p>
      </div>

      <div className=" flex justify-center mb-4">
        <button className=" flex-1 uppercase p-3  text-base font-semibold duration-300 text-white bg-main_orange hover:bg-hover_orange ">
          <Link to={`/checkout`}>CHECKOUT</Link>
        </button>
      </div>

      <div className=" flex justify-center">
        <button
          onClick={closeCart}
          className=" flex-1 uppercase p-3  text-base font-semibold duration-300 text-white hover:text-main_orange bg-black hover:bg-binary_black "
        >
          CLOSE CART
        </button>
      </div>
    </div>
  );
}

export default Cart;
