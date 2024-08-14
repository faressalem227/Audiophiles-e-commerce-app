import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import CategoryItem from "./CategoryItem";
import About from "../../layout/About";
import Zx9Speacker from "./Zx9Speacker";
import Yx1Earphones from "./Yx1Earphones";
import Zx7Speacker from "./Zx7Speacker";
import Button from "../../layout/Button";
import HeadPhonesTumbnail from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersTumbnail from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarPhonesTumbnail from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";

function Home() {
  return (
    <>
      <Header>
        <div className=" h-svh md:h-lvh bg-binary_black bg-mobileHeaderImg md:bg-tabletHeaderImg lg:bg-pcHeaderImg bg-no-repeat bg-cover bg-center">
          <section className=" container p-12 mx-auto mb-10 flex flex-col items-center lg:items-start gap-10  font-ManRope">
            <p className=" text-gray-500 text-[13px] tracking-[10px]">
              NEW PRODUCT
            </p>
            <h1 className=" lg:w-[500px] text-white text-center lg:text-left text-5xl md:text-6xl lg:7xl  font-extrabold ">
              XX99 Mark II Headphones
            </h1>
            <p className=" lg:w-[370px] text-gray-500 text-base text-center lg:text-left">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <div>
              <Button orangeBtn>See Product</Button>
            </div>
          </section>
        </div>
      </Header>
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
