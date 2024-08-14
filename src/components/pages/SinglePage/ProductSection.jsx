import head from "../../../assets/static/78c19833e196460df0dfa9f3e9539310.png";
import head2 from "../../../assets/static/9a32de4d517d68e76f21bc95a6c0a408.png";
import head3 from "../../../assets/static/78c19833e196460df0dfa9f3e953.png";
function ProductSection(){
    return(
        <>
         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-8">
                <div className="text-center">
                <div className="md:pt-20 lg:pt-20 sm:pt-4 sm:w-full mage-container bg-gray-100 m-4 lg:w-[350px] lg:h-[318px]  md:w-[223px] md:h-[318px]   sm:h-[120px]">
                        <img src={head} alt="XX99 MARK I" className="mx-auto lg:w-[143.12px] lg:h-[172px]  md:w-[143.12px] md:h-[172px]  sm:w-[71.56px] sm:h-[86px]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">XX99 MARK I</h3>
                    <button className="bg-orange-700 text-white px-6 py-2 rounded">SEE PRODUCT</button>
                </div>
                <div className="text-center">
                <div className="md:pt-20 lg:pt-20 sm:pt-4 sm:w-full mage-container bg-gray-100 m-4 lg:w-[350px] lg:h-[318px]  md:w-[223px] md:h-[318px] sm:h-[120px]">
                        <img src={head2} alt="XX99 MARK I" className="mx-auto  lg:w-[143.12px] lg:h-[172px]  md:w-[143.12px] md:h-[172px]  sm:w-[71.56px] sm:h-[86px]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">XX59</h3>
                    <button className="bg-orange-700 text-white px-6 py-2 rounded">SEE PRODUCT</button>
                </div>
                
                <div className="text-center">
                    <div className="md:pt-20 lg:pt-20 sm:pt-4 sm:w-full mage-container bg-gray-100 m-4 lg:w-[350px] lg:h-[318px]  md:w-[223px] md:h-[318px]  sm:h-[120px]">
                        <img  src={head3} alt="XX99 MARK I" className="mx-auto  lg:w-[143.12px] lg:h-[172px]  md:w-[143.12px] md:h-[172px]  sm:w-[71.56px] sm:h-[86px]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">ZX9 SPEAKER</h3>
                    <button className="bg-orange-700 text-white px-6 py-2 rounded">SEE PRODUCT</button>
                </div>
            </div>
        </>
    );
}

export default ProductSection