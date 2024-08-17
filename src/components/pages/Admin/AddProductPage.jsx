import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import AddProduct from './AddProduct'
import AdminHeader from '../../layout/AdminHeader'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const AddProductPage = () => {
  const navigate = useNavigate();
    const roles = localStorage.getItem('roles');

    useEffect(() => {
        if(roles === null || roles !== 'Admin')
            return navigate('/NotFound');
    }, []);

  return (
    <>
        <Header />
        <AdminHeader title="Add New Product" />
        <AddProduct />
        <Footer />
    </>
  )
}

export default AddProductPage