import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3333/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((product) => setProducts(product))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  // Handling The Delete Process
  const handleDelete = (pId) => {
    let confirmDel = confirm("Are You sure to delete this product?");
    if(!confirmDel) return;

    // Delete the product
    fetch(`http://localhost:3333/products/${pId}`, {
      method: 'DELETE',
    }).catch((err) => toast.error(`Something went wrong: ${err}`));
    
    // Process Succeeded
    toast.success("Product Deleted Succesfully!");

    // Update The products
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== pId));
  }

  return (
    <>
      <main className="min-h-screen text-white p-4 sm:p-6">
        <ToastContainer />
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Product Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900 border border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-800">
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Name</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Slug</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Price</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Category</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-center">Is New</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-700 ${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                    }`}
                  >
                    <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700">
                      <Link className="hover:underline" to={`/products/${item.id}`}>
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700">{item.slug}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700">{item.price}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700">{item.category}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-center">
                      {item.new ? "Yes" : "No"}
                    </td>
                    <td className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                      <Link
                        to={`/admin/edit-product/${item.id}`}
                        className="bg-blue-600 text-white py-2 px-2 sm:px-3 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105 mr-2 flex items-center justify-center"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 text-white py-2 px-2 sm:px-3 rounded-lg hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-10">
            <Link className="text-white bg-main_orange hover:bg-hover_orange px-5 py-3" to='/admin/add-product'>
                Add New Product
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Table;
