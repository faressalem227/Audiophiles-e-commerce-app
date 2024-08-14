import React from 'react'

const ProductFeatures = ({product}) => {
    // Features Logic
    const fLen = product.features.length;
    let feat1 = '';
    let from = 0;
    for(let i = 0; i < fLen; i++) {
        feat1 += product.features[i];
        if(i >= fLen/2 && product.features[i] == '.') {
            from = i;
            break;
        }
    }
    let feat2 = product.features.substring(from+1);

  return (
    <section className='container p-6 my-12 mx-auto'>
        {/* Flex Container */}
        <div className="flex flex-col space-y-12 md:flex-row md:justify-around md:space-x-12 md:space-y-0">
            {/* Features */}
            <div className="flex flex-col space-y-8 text-left md:w-2/3">
                <h2 className='uppercase text-4xl font-bold tracking-wider'>Features</h2>
                <p className='text-Desc_gray md:w-2/3'>
                    {feat1}
                </p>
                <p className='text-Desc_gray md:w-2/3'>
                    {feat2}
                </p>
            </div>
            {/* InBox */}
            <div className='flex flex-col space-y-8 text-left md:w-1/3'>
                <h2 className='uppercase text-4xl font-bold tracking-wider'>In The Box</h2>
                <div className='flex flex-col space-y-4'>
                    {
                        product.includes.map((item) => {
                            return (
                                <div className="flex justify-start w-full">
                                    <span className='text-main_orange mr-5 font-bold'>{item.quantity}X</span>
                                    <span className='text-Desc_gray'>{item.item}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductFeatures