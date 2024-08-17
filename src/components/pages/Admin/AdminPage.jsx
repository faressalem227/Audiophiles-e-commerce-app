import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';
import { RiAdminFill } from "react-icons/ri";
import Spinner from '../Spinner/Spinner';
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AdminPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const roles = localStorage.getItem('roles');
    const isGreet = localStorage.getItem('greeting');

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
        if(roles === null || roles !== 'Admin')
            return navigate('/NotFound');
        if(isGreet === 'false') {
          toast.success(`Welcome ${localStorage.getItem('fullname')} 😇`);
          localStorage.setItem('greeting', true);
        }
    }, []);
    
  return (
    <>
    {loading ? <Spinner /> : <>
      <Header />
      <ToastContainer />
      <section className='container p-6 mx-auto my-12'>
        <div className="flex flex-col my-12 justify-center items-center space-y-12">
          <div className="flex items-center space-x-4">
          <h2 className='text-4xl text-ManRope'>Welcome, Admin </h2>
          <RiAdminFill className='text-4xl' />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Link to='/admin/all-products' className='text-main_orange bg-transparent border-2 border-binary_black hover:bg-binary_black hover:text-white px-5 py-3'>All Products</Link>
            <Link to='/admin/add-product' className='text-white bg-main_orange hover:bg-hover_orange px-5 py-3'>Add New Product</Link>
          </div>
        </div>
      </section>
      <Footer />
      </>
    }
    </>
  )
}

export default AdminPage