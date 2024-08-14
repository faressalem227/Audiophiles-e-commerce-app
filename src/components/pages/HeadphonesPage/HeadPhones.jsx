import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Headphone_items from "./Headphone_items";
import Headphone_item1 from "./Headphone_item1";
import Headphone_item2 from "./Headphone_item2";
import CategoryNavigationSection from "../../layout/CategoryNavigationSection";
import About from "../../layout/About";

import HeaderContent from "../../layout/HeaderContent";
function HeadPhones() {
  return (
    <>
      <Header>
        <HeaderContent title={"HEADPHONES"} />
      </Header>
      <Headphone_items />
      <Headphone_item1 />
      <Headphone_item2 />
      <CategoryNavigationSection />
      <About />
      <Footer />
    </>
  );
}

export default HeadPhones;
