import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [titleErr, setTitleErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [subjectErr, setSubjectErr] = useState('');

    let displayHiddTitle = {
        display: 'block'
    }
    let displayHiddEmail = {
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
        if(email === '') {
            setEmailErr("Email is required");
            displayHiddEmail.display = 'block';
            isValid = false;
        } else {
            setEmailErr('');
            displayHiddEmail.display = 'hidden';
        }
        if(subject === '') {
            setSubjectErr("Subject is required");
            displayHiddsub.display = 'block';
            isValid = false;
        } else {
            setSubjectErr('');
            displayHiddsub.display = 'hidden';
        }
        let validEmail = /\w+@\w+.\w+/ig;
        if(!validEmail.test(email)) {
            setEmailErr("Email Should be valid!");
            displayHiddEmail.display = 'block';
            isValid = false;
        } else {
            setEmailErr('');
            displayHiddEmail.display = 'hidden';
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
        
        let newContact = {
            Title: title,
            Email: email,
            Subject: subject
        }

        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
        const url = 'https://localhost:44355/api/Contact/user';
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        }).then((res) => {
            return res.json();
        }).then((response) => {
            if(response.isSucceeded === false) {
                toast.error("Something Went Wrong!");
            } else {
                toast.success("Message sent successfully! We will contact you as soon as possible 😊");
                // Reset Fields
                setTitle('');
                setEmail('');
                setSubject('');
            }
        }).catch((err) => {
            toast.error(`Something went wrong: ${err}`);
        });

    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ToastContainer />
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-9/10 md:w-full md:max-w-2xl">
            <h1 className="text-2xl font-bold text-main_orange text-center mb-4">AudioPhile Support Center</h1>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
                >
                Email
                </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-main_orange"
                />
                <span style={{ displayHiddEmail }} className='text-red-500'>
                    {emailErr}
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
                        Send Message
                    </button>
                )
            }
            
            </form>
        </div>
    </div>

  )
}

export default ContactUs