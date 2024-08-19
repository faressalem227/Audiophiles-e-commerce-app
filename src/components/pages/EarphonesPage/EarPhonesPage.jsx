import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import CategoryNavigationSection from "../../layout/CategoryNavigation/CategoryNavigationSection";
import About from "../../layout/About";
import HeaderContent from "../../layout/HeaderContent";
import ProductsSection from "../../layout/ProductsSection";
import { useContext } from "react";
import ProductsContext from "../../../store/ProductsContext";
import Spinner from "../Spinner/Spinner";
import NotFoundpage from "../NotFound/NotFoundpage";
import useScrollToTop from "../../../hooks/useScrollToTop";
function EarPhonesPage() {
  useScrollToTop();
  const productCtx = useContext(ProductsContext);

  let content;

  if (productCtx.loading) {
    content = <Spinner />;
  } else if (productCtx.error) {
    content = <NotFoundpage content={"Products"} />;
  } else {
    content = (
      <ProductsSection products={productCtx.products} category="earphones" />
    );
  }

  return (
    <>
      <Header>
        <HeaderContent title={"EARPHONES"} />
      </Header>
      <main>
        <section className=" container p-5 mx-auto">{content}</section>
        <CategoryNavigationSection />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default EarPhonesPage;
