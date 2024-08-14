import HeadphoneDesktop from '../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import Button from "../../layout/Button";

const Headphone_items = () => {
    return (
        <section className="container p-5 mx-auto flex flex-col lg:flex-col xl:flex-row xl:justify-between xl:items-center mb-16 mt-20">
            <div className="w-full lg:w-full xl:w-1/2 flex justify-center xl:justify-end lg:mb-8 xl:mb-0 xl:pr-8">
                <img
                    src={HeadphoneDesktop}
                    alt="XX99 Mark II Headphones"
                    className="w-3/4 h-auto object-cover rounded-lg"
                />
            </div>

            <div className="w-full lg:w-full xl:w-1/2 flex flex-col items-center xl:items-start lg:items-center xl:pl-24">
                <p className="text-[#D87D4A] text-[13px] tracking-[10px] mb-6 mt-0 text-center xl:text-left">
                   NEW PRODUCT
                </p>
                <h1 className="text-[#000000] text-center text-4xl font-extrabold mb-6 xl:text-left xl:text-5xl">
                    XX99 MARK II <br /> <span className="block text-3xl xl:text-4xl">HEADPHONES</span>
                </h1>
                <p className="text-gray-500 text-base text-center mb-6 xl:text-left">
                    The new XX99 Mark II headphones is the pinnacle of pristine audio. <br />
                    It redefines your premium headphone experience by reproducing <br /> the balanced depth and precision of studio-quality sound.
                </p>

                <Button orangeBtn>See Product</Button>
            </div>
        </section>
    );
};

export default Headphone_items;
