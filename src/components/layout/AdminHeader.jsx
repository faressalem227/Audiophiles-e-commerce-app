import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import { Link } from 'react-router-dom';

const AdminHeader = ({title}) => {
  return (
    <div className="flex justify-end items-center space-x-2 mx-5 my-3 p-2">
        <Link to='/admin' className=' text-Desc_gray font-bold hover:underline'>Admin Panel </Link>
        <p className=' text-Desc_gray'><GoChevronLeft /></p>
        <p className=' text-Desc_gray'>{title}</p>
    </div>
  )
}

export default AdminHeader