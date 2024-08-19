import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import HeaderContent from "../../layout/HeaderContent";
import AboutUs from "./AboutUs";
import useScrollToTop from "../../../hooks/useScrollToTop";
function AboutPage() {
  useScrollToTop();
  return (
    <>
      <Header>
        <HeaderContent title={"ABOUT US"} />
      </Header>
      <main>
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
