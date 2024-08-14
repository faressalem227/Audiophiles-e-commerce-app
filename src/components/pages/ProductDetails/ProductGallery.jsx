import React from 'react'
import Gallery1 from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import Gallery2 from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import Gallery3 from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'

const ProductGallery = () => {
  return (
    <section className='container p-6 my-12 mx-auto'>
        <div className="flex flex-col space-y-4 justify-center md:flex-row md:space-x-4 md:space-y-0">
            {/* Left Side */}
            <div className="flex flex-col space-y-8">
                <img src={Gallery1} className='rounded-md' alt="" />
                <img src={Gallery2} className='rounded-md' alt="" />
            </div>
            {/* Right Side */}
            <div className=''>
                <img src={Gallery3} className='rounded-md' alt="" />
            </div>
        </div>
    </section>
  )
}

export default ProductGallery