import React, { useState, useEffect } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import AdminHeader from '../../layout/AdminHeader'
import { useParams } from 'react-router-dom'
import Respond from './Respond'

const RespondPage = () => {
    const {id} = useParams();
    const [contact, setContact] = useState({});
    const [token, setToken] = useState('');

    // Fetch The Current Contact
    useEffect(() => {
        let token = localStorage.getItem("token");
        if(token === null) {
            return navigate('/NotFound');
        }

        setToken(token);
        fetch(`https://localhost:44355/api/Contact/cont/${id}`, {
            headers: {
                "Authorization": "bearer "+token
            }
        })
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        return response.json();
      })
      .then((resp) => setContact(resp))
      .catch((error) => console.error("Fetch error:", error));
    }, []);

  return (
    <>
        <Header />
        <AdminHeader title="Respond Center" />
        <Respond contact={contact} token={token} />
        <Footer />
    </>
  )
}

export default RespondPage