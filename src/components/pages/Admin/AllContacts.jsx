import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useUserContactsContext } from '../../../store/ContactsContext';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner'

const AllContacts = () => {
    // Use Contacts Context
    const contacts = useUserContactsContext();
    const [loading, setLoading] = useState(true);

    setTimeout(() => setLoading(false), 2000);

  return (
    <>
    {
      loading? <Spinner /> : (
    <main className="min-h-screen text-white p-4 sm:p-6">
        <ToastContainer />
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Product Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900 border border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-800">
                  <th className="hidden py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left md:block">Email</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Title</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Subject</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Status</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((item, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-700 ${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                    }`}
                  >
                    <td className="hidden py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 md:block">
                      {item.email}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700">{item.title}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700">{item.subject}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700">{item.status ? `✔️` : `❌`}</td>
                    <td className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                        {
                            item.status ? "completed" : (
                                <Link
                                    to={`/admin/respond/${item.id}`}
                                    className="bg-blue-600 text-white py-2 px-2 sm:px-3 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105 mr-2 flex items-center justify-center"
                                >
                                    Respond
                                </Link>
                            )
                        }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <div className="flex justify-center mt-10">
            <Link className="text-white bg-main_orange hover:bg-hover_orange px-5 py-3" to='/admin/all-responses'>
                All Responses
            </Link>
          </div> */}
        </div>
      </main>
      )
      }
      </>

  )
}

export default AllContacts