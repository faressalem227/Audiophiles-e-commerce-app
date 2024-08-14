import React from 'react'
import { useState, useEffect } from 'react';

const ProductGallery = ({product}) => {
  const [screen1, setScreen1] = useState(product.gallery.first.desktop.substring(1));
  const [screen2, setScreen2] = useState(product.gallery.second.desktop.substring(1));
  const [screen3, setScreen3] = useState(product.gallery.third.desktop.substring(1));

  const updateImages = () => {
    if (window.innerWidth <= 640 || (window.innerWidth >= 640 && window.innerWidth < 768)) {
      setScreen1(product.gallery.first.mobile.substring(1));
      setScreen2(product.gallery.second.mobile.substring(1));
      setScreen3(product.gallery.third.mobile.substring(1));
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setScreen1(product.gallery.first.tablet.substring(1));
      setScreen2(product.gallery.second.tablet.substring(1));
      setScreen3(product.gallery.third.tablet.substring(1));
    } else {
      setScreen1(product.gallery.first.desktop.substring(1));
      setScreen2(product.gallery.second.desktop.substring(1));
      setScreen3(product.gallery.third.desktop.substring(1));
    }
  };

  useEffect(() => {
    // Update images on component mount
    updateImages();

    // Add resize event listener
    window.addEventListener('resize', updateImages);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateImages);
    };
  }, [product]);

  return (
    <section className='container p-6 my-12 mx-auto'>
        <div className="flex flex-col space-y-4 justify-center md:flex-row md:space-x-4 md:space-y-0">
            {/* Left Side */}
            <div className="flex flex-col space-y-8">
                <img src={screen1} className='rounded-md' alt="product" />
                <img src={screen2} className='rounded-md' alt="product" />
            </div>
            {/* Right Side */}
            <div className=''>
                <img src={screen3} className='rounded-md' alt="product" />
            </div>
        </div>
    </section>
  )
}

export default ProductGallery