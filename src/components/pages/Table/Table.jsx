import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import HeaderContent from "../../layout/HeaderContent";

const Table = () => {
  const data = [
    {
      name: "Product 1",
      qty: 10,
      price: "$20.00",
      description: "This is a sample product.",
      category: "Category A",
      isNew: true,
    },
    {
      name: "Product 2",
      qty: 5,
      price: "$50.00",
      description: "Another sample product.",
      category: "Category B",
      isNew: false,
    },
    {
      name: "Product 3",
      qty: 8,
      price: "$30.00",
      description: "A third sample product.",
      category: "Category A",
      isNew: true,
    },
    {
      name: "Product 4",
      qty: 15,
      price: "$15.00",
      description: "A fourth sample product.",
      category: "Category C",
      isNew: false,
    },
    {
      name: "Product 5",
      qty: 12,
      price: "$40.00",
      description: "A fifth sample product.",
      category: "Category D",
      isNew: true,
    },
  ];

  return (
    <>
      <Header>
        <HeaderContent title={"TABLE"} />
      </Header>
      <main className="min-h-screen bg-black text-white p-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Product Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900 border border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-800">
                  <th className="py-3 px-4 border-b border-gray-700 text-left">Name</th>
                  <th className="py-3 px-4 border-b border-gray-700 text-left">Qty</th>
                  <th className="py-3 px-4 border-b border-gray-700 text-left">Price</th>
                  <th className="py-3 px-4 border-b border-gray-700 text-left">Description</th>
                  <th className="py-3 px-4 border-b border-gray-700 text-left">Category</th>
                  <th className="py-3 px-4 border-b border-gray-700 text-center">Is New</th>
                  <th className="py-3 px-4 border-b border-gray-700 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-700 ${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                    }`}
                  >
                    <td className="py-2 px-4 border-b border-gray-700">{item.name}</td>
                    <td className="py-2 px-4 border-b border-gray-700">{item.qty}</td>
                    <td className="py-2 px-4 border-b border-gray-700">{item.price}</td>
                    <td className="py-2 px-4 border-b border-gray-700">{item.description}</td>
                    <td className="py-2 px-4 border-b border-gray-700">{item.category}</td>
                    <td className="py-2 px-4 border-b border-gray-700 text-center">
                      {item.isNew ? "Yes" : "No"}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700 text-center">
                      <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mr-2">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                        Delete
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




