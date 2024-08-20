import React, { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import AdminHeader from '../../layout/AdminHeader'
import AllContacts from './AllContacts'
import { UserContactsContext } from '../../../store/ContactsContext'
import { useNavigate } from 'react-router-dom'

const AllContactsPage = () => {
    const [admin, setAdmin] = useState(false);
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if(token === null) {
            return navigate('/NotFound');
        }

        setAdmin(true);
        fetch("https://localhost:44355/api/Contact/all", {
            headers: {
                "Authorization": "bearer "+token
            }
        })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((resp) => setContacts(resp))
      .catch((error) => console.error("Fetch error:", error));
    }, []);

  return (
    <> {
        admin ? (
            <>
            <Header />
            <AdminHeader title="All Contacts" />
            <UserContactsContext.Provider value={contacts}>
                <AllContacts />
            </UserContactsContext.Provider>
            <Footer />
            </>
        ) : (
            <></>
        )
    }
    </>
  )
}

export default AllContactsPage