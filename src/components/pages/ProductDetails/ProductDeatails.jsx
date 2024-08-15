/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProductInfo from "./ProductInfo";

function ProductDeatails({ product }) {
  //   console.log(product);
  //   console.log(product.image);

  const category = product.category;
  return (
    <section className=" container p-5 mx-auto">
      <div>
        <button className=" text-gray-500 hover:text-main_orange font-semibold text-sm duration-300">
          <Link to={`/${category}`}>Go Back</Link>
        </button>
      </div>
      <ProductInfo product={product} />
    </section>
  );
}

export default ProductDeatails;
