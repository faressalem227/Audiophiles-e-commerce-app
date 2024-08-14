import React from 'react'
import { FaBackward } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProductHeader = ({product}) => {

  const [screen1, setScreen1] = useState(product.image.desktop.substring(1));

  const updateImage = () => {
    if (window.innerWidth <= 640 || (window.innerWidth >= 640 && window.innerWidth < 768)) {
      setScreen1(product.image.mobile.substring(1));
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setScreen1(product.image.tablet.substring(1));
    } else {
      setScreen1(product.image.desktop.substring(1));
    }
  };

  useEffect(() => {
    // Update image on component mount
    updateImage();

    // Add resize event listener
    window.addEventListener('resize', updateImage);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, [product]);

  return (
    <section className='container p-6 my-12 mx-auto'>
        {/* Go Back */}
        <Link to="/" className='text-Desc_gray hover:text-main_orange'> <FaBackward /> </Link>
        <div className="flex flex-col items-center mt-6 space-y-8 md:flex-row md:justify-between md:space-y-0">
            {/* Product Image */}
            <div className='max-w-md md:max-w-xs md:w-1/2 lg:max-w-md'>
                <img src={screen1} className='rounded-md' alt="xx99" />
            </div>

            {/* Content */}
            <div className='max-w-md flex flex-col space-y-8 md:max-w-xs md:w-1/2 lg:max-w-md'>
                <p className={product.new ? `text-main_orange tracking-[0.8rem] uppercase` : `hidden`}>New Product</p>
                <h2 className='font-bold text-4xl tracking-wider uppercase'>{product.name}</h2>
                <p className='text-Desc_gray'>{product.description}</p>
                <h4 className='font-bold text-xl'>$ {product.price.toLocaleString()}</h4>

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