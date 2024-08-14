import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Speaker_item1 from "./Speaker_item1";
import Speaker_item2 from "./Speaker_item2";
import CategoryItem from "../Home/CategoryItem";
import About from"../../layout/About"
import HeadPhonesTumbnail from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersTumbnail from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarPhonesTumbnail from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import HeaderContent from "../../layout/HeaderContent";
function SpeakerPage() {
  return (
    <>
      <Header>
        <HeaderContent title={"SPEAKERS"} />
      </Header>
      <Speaker_item1/>
      <Speaker_item2/>
      <section className=" container p-5 mx-auto my-36 flex flex-col md:flex-row md:justify-center gap-40 md:gap-4">
          <CategoryItem
            title="HEADPHONES"
            src={HeadPhonesTumbnail}
            path="/Headphones"
          />
          <CategoryItem
            title="SPEAKERS"
            src={SpeakersTumbnail}
            path="/Speakers"
          />
          <CategoryItem
            title="EARPHONES"
            src={EarPhonesTumbnail}
            path="/Earphones"
          />
        </section>
      <About/>
      <Footer />
    </>
  );
}

export default SpeakerPage;
