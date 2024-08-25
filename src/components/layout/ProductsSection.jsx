/* eslint-disable react/prop-types */
import CategogryProduct from "./CategogryProduct";

function ProductsSection({ products, category }) {
  let Categoryproducts = products.filter((product) => {
    return product.category === category;
  });

  console.log(Categoryproducts);

  return (
    <section className=" flex flex-col gap-7">
      {Categoryproducts.map((product, index) => (
        <CategogryProduct
          key={product.id}
          id={product.id}
          slug={product.slug}
          index={index}
          isNew={product.new}
          name={product.name}
          description={product.description}
          images={product.id.length > 1? product.image : product.categoryImage}
        />
      ))}
    </section>
  );
}

export default ProductsSection;
