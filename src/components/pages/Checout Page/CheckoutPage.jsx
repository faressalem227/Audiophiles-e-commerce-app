// Checkout.jsx (تحديث)
const Checkout = ({ formData, handleInputChange, handleSubmit, errors }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {errors.zipCode && (
          <p className="text-red-500 text-sm">{errors.zipCode}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {errors.country && (
          <p className="text-red-500 text-sm">{errors.country}</p>
        )}
      </div>

      {formData.paymentMethod === "e-money" && (
        <>
          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <label htmlFor="eMoneyNumber" className="block text-sm font-medium text-gray-700">e-Money Number</label>
              <input
                type="text"
                id="eMoneyNumber"
                name="eMoneyNumber"
                value={formData.eMoneyNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            {errors.eMoneyNumber && (
              <p className="text-red-500 text-sm">{errors.eMoneyNumber}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <label htmlFor="eMoneyPin" className="block text-sm font-medium text-gray-700">e-Money PIN</label>
              <input
                type="text"
                id="eMoneyPin"
                name="eMoneyPin"
                value={formData.eMoneyPin}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            {errors.eMoneyPin && (
              <p className="text-red-500 text-sm">{errors.eMoneyPin}</p>
            )}
          </div>
        </>
      )}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
    </form>
  );
};

export default Checkout;
