import { useState, useContext } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Modal from "../../layout/Modal";
import CheckoutModal from "./CheckoutModal";
import { UserProgressContext } from "../../../store/UserProgressContext";
import useScrollToTop from "../../../hooks/useScrollToTop";
import CartContext from "../../../store/CartContext";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  useScrollToTop();
  const navigate = useNavigate();

  const userProgressCtx = useContext(UserProgressContext);
  const CartCtx = useContext(CartContext);

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
    CartCtx.clearCart();
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
      // Token 
      let auth = localStorage.getItem('token');
      if(auth === null) {
        return navigate('/login');
      }
      // Process the payment
      console.log("Form submitted successfully");
      handleShowCheckout(); // Show the checkout modal if the form is valid
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
          className="container grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto p-6"
        >
          {/* Checkout Section */}
          <section
            id="checkout"
            className="lg:col-span-2 lg:row-span-2 bg-white p-6 shadow-lg rounded-md"
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
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
                      type="text"
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
            className="bg-white p-6 shadow-lg rounded-md lg:col-span-1 lg:row-span-2"
          >
            <h2 className="text-lg font-semibold text-main_orange mb-4">
              SUMMARY
            </h2>
            <ul className="mb-4">
              {cartProducts.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={product.image.mobile}
                      alt={product.name}
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">
                        $ {product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">x{product.quantity}</p>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">TOTAL</p>
              <p className="text-lg font-semibold">
                $ {totalAmount.toFixed(2)}
              </p>
            </div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">SHIPPING</p>
              <p className="text-lg font-semibold">$ {shipping.toFixed(2)}</p>
            </div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">VAT (INCLUDED)</p>
              <p className="text-lg font-semibold">$ {vat.toFixed(2)}</p>
            </div>

            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-gray-600">GRAND TOTAL</p>
              <p className="text-lg font-semibold text-main_orange">
                $ {grandTotal.toFixed(2)}
              </p>
            </div>

            <button
              type="submit"
              className="bg-main_orange text-white py-2 px-4 rounded-md w-full"
            >
              Continue & Pay
            </button>
          </section>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default CheckoutPage;