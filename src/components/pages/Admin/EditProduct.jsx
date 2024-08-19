import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProduct({ id }) {
  const [product, setProduct] = useState(null);
  const [dynamicInputs, setDynamicInputs] = useState([]);

  useEffect(() => {
    // Fetch the product data from API
    fetch(`http://localhost:3333/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setDynamicInputs(data.includes || []);
      })
      .catch((error) => {
        toast.error(`Error fetching product data: ${error}`);
      });
  }, [id]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newDynamicInputs = [...dynamicInputs];
    newDynamicInputs[index][name] = value;
    setDynamicInputs(newDynamicInputs);
  };

  const addFields = () => {
    setDynamicInputs([
      ...dynamicInputs,
      { id: dynamicInputs.length, quantity: "", item: "" },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const includes = dynamicInputs.map((input) => ({
      quantity: parseInt(input.quantity, 10),
      item: input.item,
    }));

    const updatedProductData = {
      ...product,
      slug: data.slug,
      name: data.name,
      image: {
        mobile: data.image.name,
        tablet: data.image.name,
        desktop: data.image.name,
      },
      category: data.catigory.toLowerCase(),
      categoryImage: {
        mobile: data.categoryImage.name,
        tablet: data.categoryImage.name,
        desktop: data.categoryImage.name,
      },
      new: data.isNew,
      price: parseInt(data.price, 10),
      description: data.description,
      features: data.feature,
      includes: includes,
    };

    fetch(`http://localhost:3333/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProductData),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Product updated successfully!!");
      })
      .catch((error) => {
        toast.error(`Something went wrong!! ${error}`);
      });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 mb-5">
      <ToastContainer />
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=" "
          defaultValue={product.name}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="slug"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Slug
        </label>
        <input
          required
          type="text"
          name="slug"
          id="slug"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=" "
          defaultValue={product.slug}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select an option
        </label>
        <select
          id="countries"
          name="catigory"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          defaultValue={product.category}
        >
          <option>Choose a catigory</option>
          <option value="HeadPhone">HeadPhone</option>
          <option value="Speaker">Speaker</option>
          <option value="Earphone">Earphone</option>
        </select>
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Price
        </label>
        <input
          required
          type="number"
          name="price"
          id="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=" "
          defaultValue={product.price}
        />
      </div>
      <div className="mb-5 flex">
        <label
          htmlFor="bordered-radio-1"
          className="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >
          Is New
        </label>
        <div className="flex items-center">
          <input
            required
            id="bordered-radio-1"
            type="radio"
            value="true"
            name="isNew"
            className="w-4 h-4 text-blue-600 bg-gray-100"
            defaultChecked={product.new === true}
          />
          <label
            htmlFor="bordered-radio-1"
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900"
          >
            True
          </label>
        </div>
        <div className="flex items-center">
          <input
            required
            id="bordered-radio-2"
            type="radio"
            value="false"
            name="isNew"
            className="w-4 h-4 text-blue-600 bg-gray-100"
            defaultChecked={product.new === false}
          />
          <label
            htmlFor="bordered-radio-2"
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900"
          >
            False
          </label>
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        <textarea
          required
          id="description"
          name="description"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
          defaultValue={product.description}
        ></textarea>
      </div>
      <div className="mb-5">
        <label
          htmlFor="feature"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Feature
        </label>
        <textarea
          required
          id="feature"
          name="feature"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
          defaultValue={product.features}
        ></textarea>
      </div>
      <div className="mb-5">
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="image"
        >
          Upload file
        </label>
        <input
          name="image"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          id="image"
          type="file"
        />
      </div>
      <div className="mb-5">
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="categoryImage"
        >
          Upload multiple files
        </label>
        <input
          name="categoryImage"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          id="categoryImage"
          type="file"
          multiple
        />
      </div>
      <div>
        {dynamicInputs.map((input, index) => (
          <div key={index} className="mb-5">
            <label
              htmlFor={`quantity${index}`}
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Quantity
            </label>
            <input
              type="number"
              id={`quantity${index}`}
              name="quantity"
              value={input.quantity}
              onChange={(event) => handleInputChange(index, event)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
              required
            />
            <label
              htmlFor={`item${index}`}
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Item
            </label>
            <input
              type="text"
              id={`item${index}`}
              name="item"
              value={input.item}
              onChange={(event) => handleInputChange(index, event)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
              required
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addFields}
        className="text-white mr-5 mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add More
      </button>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Update Product
      </button>
    </form>
  );
}

export default EditProduct;
