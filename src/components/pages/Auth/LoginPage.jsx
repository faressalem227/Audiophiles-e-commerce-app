import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import LoginForm from '../../layout/LoginForm'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LoginPage = () => {
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
        <LoginForm />
        <Footer />
    </>
  )
}

export default LoginPage