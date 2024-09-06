/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import ProductFeatures from "./ProductFeatures";

import ProductGalleries from "./ProductGalleries";
import ProductOthers from "./ProductOthers";
function ProductDetails({ product }) {
  //   console.log(product);
  //   console.log(product.image);

  const category = product.category;
  return (
    <section className=" container p-5 mx-auto flex flex-col gap-16 mb-16 ">
      <div>
        <button className=" text-gray-500 hover:text-main_orange font-semibold text-sm duration-300">
          <Link to={`/${category}`}>Go Back</Link>
        </button>
      </div>
      <ProductInfo product={product} />
      <ProductFeatures product={product} />
      <ProductGalleries gallery={product.gallery} id={product.id} />
      <ProductOthers product={product} />
    </section>
  );
}

export default ProductDetails;
