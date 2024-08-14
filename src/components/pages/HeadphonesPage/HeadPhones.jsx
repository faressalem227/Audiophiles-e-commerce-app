import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import CategoryNavigationSection from "../../layout/CategoryNavigationSection";
import About from "../../layout/About";
import ProductsSection from "../../layout/ProductsSection";
import ProductsContext from "../../../store/ProductsContext";
import { useContext } from "react";
import Spinner from "../Spinner/Spinner";
import NotFoundpage from "../NotFound/NotFoundpage";
import HeaderContent from "../../layout/HeaderContent";
function HeadPhones() {
  const productCtx = useContext(ProductsContext);

  let content;

  if (productCtx.loading) {
    content = <Spinner />;
  } else if (productCtx.error) {
    content = <NotFoundpage />;
  } else {
    content = (
      <ProductsSection products={productCtx.products} category="headphones" />
    );
  }
  return (
    <>
      <Header>
        <HeaderContent title={"HEADPHONES"} />
      </Header>
      <section className=" container p-5 mx-auto">{content}</section>
      <CategoryNavigationSection />
      <About />
      <Footer />
    </>
  );
}

export default HeadPhones;
