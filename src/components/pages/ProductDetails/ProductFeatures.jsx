/* eslint-disable react/prop-types */
function ProductFeatures({ product }) {
  return (
    <section className="font-ManRope container p-5 mx-auto flex flex-col lg:flex-row gap-10 md:gap-20 lg:gap-60">
      <div className=" flex-1 flex flex-col gap-6">
        <h3 className="font-bold text-2xl text-center md:text-left">
          FEATURES
        </h3>
        <p className="text-gray-500 text-sm  text-center md:text-left ">
          {product.features}
        </p>
      </div>
      <div className=" flex-1 flex flex-col md:flex-row lg:flex-col items-center md:items-start md:justify-between lg:justify-start gap-11 ">
        <h3 className="font-bold text-2xl text-center md:text-left">
          IN THE BOX
        </h3>
        <ul>
          {product.includes.map((boxItem) => (
            <li key={boxItem.item} className=" flex gap-7 text-gray-500">
              <p className="text-base text-main_orange text-center md:text-left">
                {boxItem.quantity}x
              </p>
              <p className="text-gray-500 text-center md:text-left">
                {boxItem.item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductFeatures;
