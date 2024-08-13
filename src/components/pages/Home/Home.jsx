import HomeHeader from "./HomeHeader";
import Footer from "../../layout/Footer";
import CategoryItem from "./CategoryItem";
import About from "../../layout/About";
import Zx9Speacker from "./Zx9Speacker";
import Yx1Earphones from "./Yx1Earphones";
import Zx7Speacker from "./Zx7Speacker";
import HeadPhonesTumbnail from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersTumbnail from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarPhonesTumbnail from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";

function Home() {
  return (
    <>
      <HomeHeader />
      <main>
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

        <section className=" container p-5 mx-auto flex flex-col gap-10 my-28">
          <Zx9Speacker />
          <Zx7Speacker />
          <Yx1Earphones />
        </section>

        <About />
      </main>
      <Footer />
    </>
  );
}

export default Home;
