import HeadphoneDesktop1 from '../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import Button from "../../layout/Button";

const Speaker_item1 = () => {
    return (
        <section className="container p-5 mx-auto flex flex-col xl:flex-row-reverse xl:justify-center xl:items-center mb-40 mt-48 sm:m-auto md:m-auto lg:m-auto" >
            {/* Image */}
            <div className="w-full xl:w-1/2 flex justify-center xl:justify-end mb-6 xl:mb-0 sm:mx-auto  ">
                <img
                    src={HeadphoneDesktop1}
                    alt="XX99 Mark II Headphones"
                    className="w-3/4 xl:mr-40 h-auto object-cover rounded-lg xl:ml-6 " // Adjust margin on large screens
                />
            </div>

            {/* Text Content */}
            <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start xl:pl-6 xl:pr-6">
                <h1 className="text-[#000000] text-center text-3xl xl:ml-36 font-extrabold mb-4 xl:text-left xl:text-4xl">

                    XX99 MARK II <br /> <span className="block text-2xl xl:text-3xl">HEADPHONES</span>
                </h1>
                <p className="text-gray-500 text-base xl:ml-36 text-center mb-4 xl:text-left">
                As the gold standard for headphones, the classic XX99 Mark I <br/>
                 offers detailed and accurate audio reproduction for <br />
                  audiophiles, mixing engineers, and music aficionados alike <br />
                   in studios and on the go. 
                </p>
                <div className='xl:ml-36'>
                <Button orangeBtn>See Product</Button>
                </div>
            </div>
        </section>
    );
};

export default Speaker_item1;
