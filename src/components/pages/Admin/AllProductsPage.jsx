import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import AdminHeader from '../../layout/AdminHeader'
import Table from './Table'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const AllProductsPage = () => {
    const navigate = useNavigate();
    const roles = localStorage.getItem('roles');

    useEffect(() => {
        if(roles === null || roles !== 'Admin')
            return navigate('/NotFound');
    }, []);

  return (
    <>
        <Header />
        <AdminHeader title="All Products" />
        <Table />
        <Footer />
    </>
  )
}

export default AllProductsPage