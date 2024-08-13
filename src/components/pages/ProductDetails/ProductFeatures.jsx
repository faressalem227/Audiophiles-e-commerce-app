import React from 'react'

const ProductFeatures = () => {
  return (
    <section className='container p-6 my-12 mx-auto'>
        {/* Flex Container */}
        <div className="flex flex-col space-y-12 md:flex-row md:justify-around md:space-x-12 md:space-y-0">
            {/* Features */}
            <div className="flex flex-col space-y-8 text-left md:w-2/3">
                <h2 className='uppercase text-4xl font-bold tracking-wider'>Features</h2>
                <p className='text-Desc_gray md:w-2/3'>
                    Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                </p>
                <p className='text-Desc_gray md:w-2/3'>
                    The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                </p>
            </div>
            {/* InBox */}
            <div className='flex flex-col space-y-8 text-left md:w-1/3'>
                <h2 className='uppercase text-4xl font-bold tracking-wider'>In The Box</h2>
                <div className='flex flex-col space-y-4'>
                    <div className="flex justify-start w-full">
                        <span className='text-main_orange mr-5 font-bold'>1X</span>
                        <span className='text-Desc_gray'>Headphone Unit</span>
                    </div>
                    <div className="flex justify-start w-full">
                        <span className='text-main_orange mr-5 font-bold'>2X</span>
                        <span className='text-Desc_gray'>Replacement Earcups</span>
                    </div>
                    <div className="flex justify-start w-full">
                        <span className='text-main_orange mr-5 font-bold'>1X</span>
                        <span className='text-Desc_gray'>User Manual</span>
                    </div>
                    <div className="flex justify-start w-full">
                        <span className='text-main_orange mr-5 font-bold'>1X</span>
                        <span className='text-Desc_gray'>3.5mm 5m Audio Cable</span>
                    </div>
                    <div className="flex justify-start w-full">
                        <span className='text-main_orange mr-5 font-bold'>1X</span>
                        <span className='text-Desc_gray'>Travel Bag</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductFeatures