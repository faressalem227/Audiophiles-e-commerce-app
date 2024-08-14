import person from "../../../assets/static/image.png";
function EndSection(){
    return(
        <div  className="flex flex-col-reverse justify-center mb-10 space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10">
                <div className="flex flex-col gap-10 lg:w-1/2">
                    <h2 className="text-4xl text-center w-[90%] font-ManRope font-bold mb-5 size-10 leading-12 lg:text-left">BRINGING YOU THE <span className="text-orange-500">BEST</span> AUDIO GEAR</h2>
                    <p className="text-gray-500 text-center mt-4 lg:text-left">
                        Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories. 
                        We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
                        Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img src={person} alt="Best Audio Gear" className="mx-auto rounded-lg mb-6 lg:w-[420px] lg:h-[468px]  md:w-full md:h-[300px]  sm:w-full" />
                </div>
            </div>
    );
}

export default EndSection;