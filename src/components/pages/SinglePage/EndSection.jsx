import person from "../../../assets/static/image.png";
function EndSection(){
    return(
        <div  className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-8">
                <div className="flex flex-col gap-16 mt-20 ">
                    <h2 className="text-5xl text-center w-[90%] font-ManRope font-bold  size-10 leading-10">BRINGING YOU THE <span className="text-orange-500">BEST</span> AUDIO GEAR</h2>
                    <p className="text-gray-500 text-center mt-4">
                        Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories. 
                        We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
                        Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                <div>
                    <img src={person} alt="Best Audio Gear" className="mx-auto rounded-lg mb-6 lg:w-[420px] lg:h-[468px]  md:w-full md:h-[300px]  sm:w-full sm:h-[300px]" />
                </div>
            </div>
    );
}

export default EndSection;