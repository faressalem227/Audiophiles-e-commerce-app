/* eslint-disable react/prop-types */

const Checkout = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <section
      onSubmit={handleSubmit}
      className="shadow-lg rounded-md max-w-3xl mx-auto p-6 space-y-8"
    >
      {/* Billing Details */}
      <section>
        <h1 className="font-semibold mb-8 text-4xl">CHECKOUT</h1>
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
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
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
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="zipCode">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
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
                checked={formData.paymentMethod === "e-money"}
                onChange={handleInputChange}
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
                checked={formData.paymentMethod === "cash-on-delivery"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="cash-on-delivery">Cash on Delivery</label>
            </div>
          </div>
        </div>

        {formData.paymentMethod === "e-money" && (
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <div>
              <label className="block mb-2" htmlFor="eMoneyNumber">
                e-Money Number
              </label>
              <input
                type="text"
                id="eMoneyNumber"
                name="eMoneyNumber"
                value={formData.eMoneyNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-black" htmlFor="eMoneyPin">
                e-Money PIN
              </label>
              <input
                type="text"
                id="eMoneyPin"
                name="eMoneyPin"
                value={formData.eMoneyPin}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default Checkout;
