/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const Summary = ({ showCheckout, isSubmitting }) => {
  const CartCtx = useContext(CartContext);
  const cartProducts = CartCtx.cartProducts || [];

  const totalAmount = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const shipping = 50;
  const vat = totalAmount * 0.2; // Assuming VAT is 20%
  const grandTotal = totalAmount + shipping + vat;

  return (
    <section className="container rounded-md my-3 max-w-3xl mx-auto p-6 space-y-8 shadow-lg row-start-3 lg:col-start-3 lg:row-start-1 lg:row-end-2">
      <h3 className="font-semibold text-lg mb-6 uppercase">Summary</h3>

      <div className="space-y-4">
        {cartProducts.map((product) => (
          <div key={product.id} className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={product.image.mobile}
                alt={product.name}
                className="mr-4 w-16 h-16 rounded-lg"
              />
              <div>
                <h2 className="text-lg font-medium">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
            <p className="text-lg font-semibold">x{product.quantity}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-gray-500 uppercase">Total</p>
          <p className="text-lg font-semibold">${totalAmount}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 uppercase">Shipping</p>
          <p className="text-lg font-semibold">${shipping}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">VAT (INCLUDED)</p>
          <p className="text-lg font-semibold">${vat.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 uppercase">Grand Total</p>
          <p className="text-lg text-main_orange font-semibold">
            ${grandTotal.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex justify-center w-auto">
        <button
          onClick={showCheckout}
          className={`flex-1 uppercase p-3 text-base font-semibold duration-300 text-white ${
            isSubmitting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-main_orange hover:bg-hover_orange"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "CONTINUE & PAY"}
        </button>
      </div>
    </section>
  );
};

export default Summary;
