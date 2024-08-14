import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Earphone_item from "./Earphone_item";
import CategoryNavigationSection from "../../layout/CategoryNavigationSection";
import About from "../../layout/About";

import HeaderContent from "../../layout/HeaderContent";
function EarPhonesPage() {
  return (
    <>
      <Header>
        <HeaderContent title={"EARPHONES"} />
      </Header>
      <Earphone_item />
      <CategoryNavigationSection />
      <About />
      <Footer />
    </>
  );
}

export default EarPhonesPage;
