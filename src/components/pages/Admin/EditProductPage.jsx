import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import AdminHeader from '../../layout/AdminHeader'
import EditProduct from './EditProduct'
import { useParams, useNavigate } from 'react-router-dom'

const EditProductPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const roles = localStorage.getItem('roles');

    useEffect(() => {
        if(roles === null || roles !== 'Admin')
            return navigate('/NotFound');
    }, []);

  return (
    <>
        <Header />
        <AdminHeader title="Edit Product" />
        <EditProduct id={id} />
        <Footer />
    </>

  )
}

export default EditProductPage