import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import HeaderContent from "../../layout/HeaderContent";

const Table = () => {
  const [products, setProducts] = useState([]);

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

  const handleDelete = (indexToDelete) => {
    setProducts(products.filter((_, index) => index !== indexToDelete));
  };

  const handleEdit = (indexToEdit) => {
    const editedName = prompt("Enter new name:", products[indexToEdit].name);
    const editedSlug = prompt("Enter new slug:", products[indexToEdit].slug);
    const editedPrice = prompt("Enter new price:", products[indexToEdit].price);
    const editedDescription = prompt(
      "Enter new description:",
      products[indexToEdit].description
    );
    const editedCategory = prompt("Enter new category:", products[indexToEdit].category);
    const editedIsNew = confirm("Is this product new? Click OK for Yes, Cancel for No.");

    setProducts(
      products.map((product, index) =>
        index === indexToEdit
          ? {
              ...product,
              name: editedName,
              slug: editedSlug,
              price: editedPrice,
              description: editedDescription,
              category: editedCategory,
              isNew: editedIsNew,
            }
          : product
      )
    );
  };

  return (
    <>
      <Header>
        <HeaderContent title={"TABLE"} />
      </Header>
      <main className="min-h-screen bg-black text-white p-4 sm:p-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Product Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900 border border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-800">
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Name</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Slug</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Price</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-700 text-left">Description</th>
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
                    <td className="py-2 sm:py-2 px-2 sm:px-4 border-b border-gray-700">{item.name}</td>
                    <td className="py-2 sm:py-2 px-2 sm:px-4 border-b border-gray-700">{item.slug}</td>
                    <td className="py-2 sm:py-2 px-2 sm:px-4 border-b border-gray-700">{item.price}</td>
                    <td className="py-2 sm:py-2 px-2 sm:px-4 border-b border-gray-700">{item.description}</td>
                    <td className="py-2 sm:py-2 px-2 sm:px-4 border-b border-gray-700">{item.category}</td>
                    <td className="py-2 sm:py-2 px-2 sm:px-4 border-b border-gray-700 text-center">
                      {item.isNew ? "Yes" : "No"}
                    </td>
                    <td className="py-2 sm:py-2 px-2 sm:px-4 border-b border-gray-700 text-center">
                      <button
                        className="bg-blue-600 text-white py-1 px-2 sm:px-3 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105 mr-2 flex items-center justify-center"
                        onClick={() => handleEdit(index)}
                      >
                        <FaEdit className="mr-1 sm:mr-2" /> Edit
                      </button>
                      <button
                        className="bg-red-600 text-white py-1 px-2 sm:px-3 rounded-lg hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                        onClick={() => handleDelete(index)}
                      >
                        <FaTrash className="mr-1 sm:mr-2" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Table;
