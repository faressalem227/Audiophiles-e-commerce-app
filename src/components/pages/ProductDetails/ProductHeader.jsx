import React from 'react'
import img from '../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import { FaBackward } from 'react-icons/fa'

const ProductHeader = ({proId}) => {
  return (
    <section className='container p-6 my-12 mx-auto'>
        {/* Go Back */}
        <a href="#" className='text-Desc_gray hover:text-main_orange'> <FaBackward /> </a>
        <div className="flex flex-col items-center mt-6 space-y-8 md:flex-row md:justify-between md:space-y-0">
            {/* Product Image */}
            <div className='max-w-md md:w-1/2'>
                <img src={img} className='rounded-md' alt="xx99" />
            </div>

            {/* Content */}
            <div className='max-w-md flex flex-col space-y-8 md:w-1/2'>
                <p className='text-main_orange tracking-[0.8rem] uppercase'>New Product</p>
                <h2 className='font-bold text-4xl tracking-wider uppercase'>XX99 Mark II Headphones</h2>
                <p className='text-Desc_gray'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                <h4 className='font-bold text-xl'>$ 2,999</h4>

                {/* Quantity and Cart */}
                <div className="flex justify-start my-2">
                  {/* Quantity */}
                  <div className='flex justify-around w-1/3 mr-5 bg-Neutral_grey px-5 py-3'>
                    <button className='text-Desc_gray font-bold hover:text-hover_orange'>-</button>
                    <input type="text" className='w-10 bg-Neutral_grey outline-none text-center' value='1' disabled/>
                    <button className='text-Desc_gray font-bold hover:text-hover_orange'>+</button>
                  </div>
                  {/* Cart */}
                  <button className="uppercase bg-main_orange hover:bg-hover_orange text-white px-10 py-3">
                    Add To Cart
                  </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductHeader