/* eslint-disable react/prop-types */
import CategogryProduct from "./CategogryProduct";

function ProductsSection({ products, category }) {
  let Categoryproducts = products.filter((product) => {
    return product.category === category;
  });

  return (
    <section className=" flex flex-col gap-7">
      {Categoryproducts.map((product, index) => (
        <CategogryProduct
          key={product.id}
          id={product.id}
          index={index}
          isNew={product.new}
          name={product.name}
          description={product.description}
          images={product.categoryImage}
        />
      ))}
    </section>
  );
}

export default ProductsSection;
