import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import AdminHeader from '../../layout/AdminHeader'
import EditProduct from './EditProduct'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Spinner from '../../pages/Spinner/Spinner'

const EditProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [dynamicInputs, setDynamicInputs] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const roles = localStorage.getItem('roles');

    useEffect(() => {
        if(roles === null || roles !== 'Admin')
            return navigate('/NotFound');

        fetch(`http://localhost:3333/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setDynamicInputs(data.includes || []);
        })
        .catch((error) => {
          toast.error(`Error fetching product data: ${error}`);
        });
    }, [roles, id]);

    setTimeout(() => setLoading(false), 2000);

  return (
    <>
    { loading ? <Spinner /> : 
      <>
          <Header />
          <AdminHeader title="Edit Product" />
          <EditProduct product={product} dynInps={dynamicInputs}  />
          <Footer />
      </>
    }
    </>
  )
}

export default EditProductPage