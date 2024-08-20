import { useState, useContext } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Modal from "../../layout/Modal";
import CheckoutModal from "./CheckoutModal";
import { UserProgressContext } from "../../../store/UserProgressContext";
import useScrollToTop from "../../../hooks/useScrollToTop";
// import CartContext from "../../../store/CartContext";

function CheckoutPage() {
  useScrollToTop();

  const userProgressCtx = useContext(UserProgressContext);
  // const CartCtx = useContext(CartContext);

  const [formErrors, setFormErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("e-money");

  function getCartProductsFromLocalStorage() {
    const storedCartProducts = localStorage.getItem("cartProducts");
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  }

  const cartProducts = getCartProductsFromLocalStorage();

  const totalAmount = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const shipping = 50;
  const vat = totalAmount * 0.2; // Assuming VAT is 20%
  const grandTotal = totalAmount + shipping + vat;

  function handleHideCheckout() {
    userProgressCtx.hideCheckout();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const errors = {};
    if (!formData.get("name").trim()) {
      errors.name = "Name is required";
    }
    if (!formData.get("email").trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
      errors.email = "Email is invalid";
    }
    if (!formData.get("phone").trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.get("phone"))) {
      errors.phone = "Phone number is invalid";
    }
    if (!formData.get("address").trim()) {
      errors.address = "Address is required";
    }
    if (!formData.get("zipCode").trim()) {
      errors.zipCode = "Zip Code is required";
    }
    if (!formData.get("city").trim()) {
      errors.city = "City is required";
    }
    if (!formData.get("country").trim()) {
      errors.country = "Country is required";
    }

    if (paymentMethod === "e-money") {
      if (!formData.get("eMoneyNumber").trim()) {
        errors.eMoneyNumber = "e-Money Number is required";
      }
      if (!formData.get("eMoneyPin").trim()) {
        errors.eMoneyPin = "e-Money PIN is required";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Process the payment
      console.log("Form submitted successfully");
    }
  };
  function handleShowCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <>
      <Header />
      <main>
        <Modal
          open={userProgressCtx.progress === "checkout"}
          onClose={
            userProgressCtx.progress === "checkout" ? handleHideCheckout : null
          }
        >
          <CheckoutModal closeCheckout={handleHideCheckout} />
        </Modal>

        <form
          onSubmit={handleSubmit}
          className=" container grid grid-cols-1 lg:grid-cols-3 gap-6   mx-auto p-6"
        >
          {/* Checkout Section */}
          <section
            id="checkout"
            className="lg:col-span-2 lg:row-span-2  bg-white p-6 shadow-lg rounded-md"
          >
            <h1 className="font-semibold mb-8 text-4xl">CHECKOUT</h1>

            {/* Billing Details */}
            <section>
              <h2 className="text-lg text-main_orange font-semibold mb-4">
                Billing Details
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm">{formErrors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm">{formErrors.phone}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="text-lg font-semibold text-main_orange mb-4">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="block mb-2" htmlFor="address">
                    Your Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {formErrors.address && (
                    <p className="text-red-500 text-sm">{formErrors.address}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2" htmlFor="zipCode">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {formErrors.zipCode && (
                    <p className="text-red-500 text-sm">{formErrors.zipCode}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {formErrors.city && (
                    <p className="text-red-500 text-sm">{formErrors.city}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2" htmlFor="country">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {formErrors.country && (
                    <p className="text-red-500 text-sm">{formErrors.country}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Payment Details */}
            <section>
              <h2 className="text-lg text-main_orange font-semibold mb-4">
                Payment Details
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center">
                <div>
                  <label className="block mb-2">Payment Method</label>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="e-money"
                      name="paymentMethod"
                      value="e-money"
                      onChange={() => setPaymentMethod("e-money")}
                      className="mr-2"
                    />
                    <label htmlFor="e-money">e-Money</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      name="paymentMethod"
                      value="cash-on-delivery"
                      onChange={() => setPaymentMethod("cash-on-delivery")}
                      className="mr-2"
                    />
                    <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                  </div>
                </div>
              </div>

              {paymentMethod === "e-money" && (
                <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2" htmlFor="eMoneyNumber">
                      e-Money Number
                    </label>
                    <input
                      type="text"
                      id="eMoneyNumber"
                      name="eMoneyNumber"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    {formErrors.eMoneyNumber && (
                      <p className="text-red-500 text-sm">
                        {formErrors.eMoneyNumber}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2" htmlFor="eMoneyPin">
                      e-Money PIN
                    </label>
                    <input
                      type="password"
                      id="eMoneyPin"
                      name="eMoneyPin"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    {formErrors.eMoneyPin && (
                      <p className="text-red-500 text-sm">
                        {formErrors.eMoneyPin}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </section>
          </section>

          {/* Summary Section */}
          <section
            id="summary"
            className="lg:col-span-1  lg:row-span-1 flex flex-col  bg-white p-6 shadow-lg rounded-md"
          >
            <h2 className="text-lg text-main_orange font-semibold mb-4">
              Summary
            </h2>
            <ul>
              {cartProducts.map((product, index) => (
                <li key={index} className="flex justify-between mb-4">
                  <div className="flex items-center gap-4 rounded-md">
                    <img
                      src={product.image.mobile}
                      alt={product.name}
                      className="w-16 h-16  rounded-md"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-500">
                        {product.quantity} x ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-6">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-lg font-semibold">Shipping</span>
              <span className="text-lg font-semibold">${shipping}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-lg font-semibold">VAT (20%)</span>
              <span className="text-lg font-semibold">${vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between  mt-6 text-xl font-bold">
              <span>Grand Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
            <div className="">
              <button
                type="submit"
                onClick={handleShowCheckout}
                className="w-full  mt-8 p-4 bg-main_orange text-white font-semibold rounded"
              >
                Continue & Pay
              </button>
            </div>
          </section>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default CheckoutPage;
