import React, { useEffect } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Register from '../../layout/RegisterationForm'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    if(token !== null) {
      if(localStorage.getItem('roles') === 'Admin')
        return navigate('/Admin');
      return navigate('/');
    }
  }, []);

  return (
    <>
        <Header />
        <Register />
        <Footer />
    </>
  )
}

export default RegisterPage