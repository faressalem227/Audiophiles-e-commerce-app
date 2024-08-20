import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Respond = ({contact, token}) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [titleErr, setTitleErr] = useState('');
    const [subjectErr, setSubjectErr] = useState('');

    let displayHiddTitle = {
        display: 'block'
    }
    let displayHiddsub = {
        display: 'block'
    }

    // Validation
    const validationForm = () => {
        let isValid = true;
        if(title === '') {
            setTitleErr("Title is required");
            displayHiddTitle.display = 'block';
            isValid = false;
        } else {
            setTitleErr('');
            displayHiddTitle.display = 'hidden';
        }
        if(subject === '') {
            setSubjectErr("Subject is required");
            displayHiddsub.display = 'block';
            isValid = false;
        } else {
            setSubjectErr('');
            displayHiddsub.display = 'hidden';
        }
        if(!isValid)
            return false;

        return true;
    } 

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // Client Validation
        if(validationForm() === false) {
            toast.error("Something went wrong!");
            return;
        }

        let newRespond = {
            UserContactId: contact.id,
            Title: title,
            Subject: subject,
        }

        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
        const url = 'https://localhost:44355/api/Contact/admin';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "bearer "+token
            },
            body: JSON.stringify(newRespond)
        }).then((res) => {
            return res.json();
        }).then((response) => {
            if(response.isSucceeded === false) {
                toast.error("Something Went Wrong!");
            } else {
                toast.success("Respond sent successfully!");
                return navigate('/admin/all-contacts');
            }
        }).catch((err) => {
            toast.error(`Something went wrong: ${err}`);
        });

    }
    
    

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ToastContainer />
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-9/10 md:w-full md:max-w-2xl">
            <h1 className="text-2xl font-bold text-main_orange text-center mb-4">Admin Responses Center</h1>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
                >
                Email To
                </label>
                <input
                type="email"
                id="email"
                value={contact.email}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-main_orange"
                disabled
                />
            </div>
            <div>
                <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
                >
                Title
                </label>
                <input
                type="text"
                id="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-main_orange"
                />
                <span style={{ displayHiddTitle }} className='text-red-500'>
                    {titleErr}
                </span>
            </div>
            
            <div>
                <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
                >
                Subject
                </label>
                <textarea
                id="subject"
                rows="5"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-main_orange"
                />
                <span style={{ displayHiddsub }} className='text-red-500'>
                    {subjectErr}
                </span>
            </div>
            {
                loading ? (
                    <button
                        className="opacity-50 cursor-not-allowed w-full bg-main_orange text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-binary_black"
                        disabled
                    >
                        Sending ....
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="w-full bg-main_orange text-white p-2 rounded-md shadow-sm hover:bg-hover_orange focus:outline-none focus:ring-2 focus:ring-binary_black"
                    >
                        Send Respond
                    </button>
                )
            }
            
            </form>
        </div>
    </div>
  )
}

export default Respond