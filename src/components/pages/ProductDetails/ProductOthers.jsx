/* eslint-disable react/prop-types */
import Button from "../../layout/Button";
import { Link } from "react-router-dom";

function ProductOthers({ product }) {
  return (
    <section className=" container p-5 mx-auto font-ManRope">
      <h3 className=" text-center uppercase font-semibold text-3xl mb-9">
        you may also like
      </h3>
      <div className="flex flex-col md:flex-row gap-10 md:gap-5">
        {product.others.map((otherProduct, index) => (
          <div key={index} className=" flex flex-col items-center gap-5">
            <div className=" flex justify-center">
              <img
                src={otherProduct.image.mobile}
                alt={`${otherProduct.name} image`}
                className=" md:hidden rounded-md"
              />
              <img
                src={otherProduct.image.tablet}
                alt={`${otherProduct.name} image`}
                className=" hidden md:block lg:hidden rounded-md"
              />
              <img
                src={otherProduct.image.desktop}
                alt={`${otherProduct.name} image`}
                className=" hidden lg:block rounded-md"
              />
            </div>
            <p className=" font-bold text-2xl">{otherProduct.name}</p>
            <Button orangeBtn>
              <Link to={`/products/${otherProduct.slug}`}>See Product</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductOthers;
