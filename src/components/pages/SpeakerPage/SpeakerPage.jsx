import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Speaker_item1 from "./Speaker_item1";
import Speaker_item2 from "./Speaker_item2";
import About from "../../layout/About";
import HeaderContent from "../../layout/HeaderContent";
import CategoryNavigationSection from "../../layout/CategoryNavigationSection";
function SpeakerPage() {
  return (
    <>
      <Header>
        <HeaderContent title={"SPEAKERS"} />
      </Header>
      <Speaker_item1 />
      <Speaker_item2 />
      <CategoryNavigationSection />
      <About />
      <Footer />
    </>
  );
}

export default SpeakerPage;
