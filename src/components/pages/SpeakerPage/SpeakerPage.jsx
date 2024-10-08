import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import HeaderContent from "../../layout/HeaderContent";
import About from "../../layout/About";
import CategoryNavigationSection from "../../layout/CategoryNavigation/CategoryNavigationSection";
import ProductsSection from "../../layout/ProductsSection";
import ProductsContext from "../../../store/ProductsContext";
import { useContext } from "react";
import Spinner from "../Spinner/Spinner";
import NotFoundpage from "../NotFound/NotFoundpage";
import useScrollToTop from "../../../hooks/useScrollToTop";
function SpeakerPage() {
  useScrollToTop();
  const productCtx = useContext(ProductsContext);

  let content;

  if (productCtx.loading) {
    content = <Spinner />;
  } else if (productCtx.error) {
    content = <NotFoundpage content={"Products"} />;
  } else {
    content = (
      <ProductsSection products={productCtx.products} category="speakers" />
    );
  }
  return (
    <>
      <Header>
        <HeaderContent title={"SPEAKERS"} />
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

export default SpeakerPage;
