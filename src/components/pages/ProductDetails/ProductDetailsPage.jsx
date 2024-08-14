import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import ProductHeader from './ProductHeader'
import ProductFeatures from './ProductFeatures'
import ProductGallery from './ProductGallery'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  const { id } = useParams();
  return (
    <>
      <Header hid='true' />
      <ProductHeader proId={id} />
      <ProductFeatures />
      <ProductGallery />
      <Footer />
    </>
  )
}

export default ProductDetailsPage