function ProductSection({product}){

    return(
        <>
         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-8">
                {
                    product.others.map((item) => {
                        return (
                            <div className="flex flex-col items-center">
                                <div className="md:pt-20 lg:pt-20 sm:pt-4 sm:w-full mage-container bg-gray-100 m-4 lg:w-[350px] lg:h-[318px]  md:w-[223px] md:h-[318px]   sm:h-[120px]">
                                    <img src={item.image.desktop.substring(1)} alt="XX99 MARK I" className="mx-auto lg:w-[143.12px] lg:h-[172px]  md:w-[143.12px] md:h-[172px]  sm:w-[71.56px] sm:h-[86px]" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                <button className="bg-main_orange text-white px-6 py-2 hover:bg-hover_orange">SEE PRODUCT</button>
                            </div>
                        )
                    })
                }
                
            </div>
        </>
    );
}

export default ProductSection