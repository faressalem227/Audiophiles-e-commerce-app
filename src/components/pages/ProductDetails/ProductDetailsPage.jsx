import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Spinner from "../Spinner/Spinner";
import ProductsContext from "../../../store/ProductsContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import NotFoundpage from "../NotFound/NotFoundpage";
import About from "../../layout/About";
import CategoryNavigationSection from "../../layout/CategoryNavigation/CategoryNavigationSection";
import ProductDeatails from "./ProductDeatails";

const ProductDetailsPage = () => {
  const productCtx = useContext(ProductsContext);
  const { id } = useParams();

  const productIndex = productCtx.products.findIndex(
    (product) => product.id === id
  );

  const product = productCtx.products[productIndex];

  let content;

  if (productCtx.loading) {
    content = <Spinner />;
  } else if (productCtx.error) {
    content = <NotFoundpage />;
  } else if (productIndex === -1 || !product) {
    content = <NotFoundpage />;
  } else {
    content = (
      <>
        <ProductDeatails product={product} />
        <CategoryNavigationSection />
        <About />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>{content}</main>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
