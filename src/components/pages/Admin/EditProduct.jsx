import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProduct({ product, dynInps }) {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);
  const [errs, setErrs] = useState('');
  const [productImgName, setProductImgName] = useState('');
  const [galleryImgNames, setGalleryImgNames] = useState([]);
  const [dynamicInputs, setDynamicInputs] = useState([]);

  useEffect(() => {
    setDynamicInputs(dynInps);
  }, []);

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

  const handleUploadingProductImage = (img) => {
    // Product Image
    const imgForm = new FormData();
    imgForm.append('Image', img);
    fetch('https://localhost:44355/api/ProductImages/product', {
      method: 'POST',
      body: imgForm
      })
      .then(response => response.json())
      .then((resp) => {
        if(resp.message !== null) {
          toast.error(resp.message);
          setIsValid(false);
          setErrs(resp.message);
          return;
        } else if(resp.errors !== undefined) {
          toast.error(resp.errors.Image);
          setIsValid(false);
          setErrs(resp.error.Image);
          return;
        } 
        else {
          setProductImgName(resp.fileName);
          setIsValid(true);
        }
      })
      .catch((error) => {
          toast.error(`Something went wrong!! ${error}`);
          setIsValid(false);
          setErrs(`Something went wrong!! ${error}`);
      });
  }

  const handleUploadingGallery = (imgs) => {
    console.log(imgs);
    // Gallery
    const imgsForm = new FormData();
    // Set All Images into Gallery
    for(var i in imgs) {
      imgsForm.append('Images', imgs[i]);
    }
    fetch('https://localhost:44355/api/ProductImages/gallery', {
      method: 'POST',
      body: imgsForm
      })
      .then(response => response.json())
      .then((resp) => {
        if(resp.message !== undefined) {
          toast.error(resp.message);
          setIsValid(false);
          setErrs(resp.message);
          return;
        } else if(resp.errors !== undefined) {
          toast.error(resp.errors.Images);
          setIsValid(false);
          setErrs(resp.error.Images);
          return;
        } 
        else {
          setGalleryImgNames(resp);
          setIsValid(true);
        }
      })
      .catch((error) => {
          toast.error(`Something went wrong!! ${error}`);
          setIsValid(false);
          setErrs(`Something went wrong!! ${error}`);
      });
  }



  const handleSubmit = (event) => {
    event.preventDefault();

    if(isValid === false) {
      toast.error(errs);
      return;
    }

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
        mobile: productImgName !== '' ? productImgName : product.image.mobile,
        tablet: productImgName !== '' ? productImgName : product.image.tablet,
        desktop: productImgName !== '' ? productImgName : product.image.desktop
      },
      category: data.catigory.toLowerCase(),
      categoryImage: {
        mobile: "/products/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg" ,
        tablet: "/products/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
        desktop: "/products/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
    },
      new: data.isNew,
      price: parseInt(data.price, 10),
      description: data.description,
      features: data.feature,
      includes: includes,
      "gallery": {
        "first": {
          "mobile": galleryImgNames.length ? galleryImgNames[0].fileName : product.gallery.first.mobile,
          "tablet": galleryImgNames.length ? galleryImgNames[0].fileName : product.gallery.first.tablet,
          "desktop": galleryImgNames.length ? galleryImgNames[0].fileName : product.gallery.first.desktop,
        },
        "second": {
          "mobile": galleryImgNames.length ? galleryImgNames[1].fileName : product.gallery.second.mobile,
          "tablet": galleryImgNames.length ? galleryImgNames[1].fileName : product.gallery.second.tablet,
          "desktop": galleryImgNames.length ? galleryImgNames[1].fileName : product.gallery.second.desktop,
        },
        "third": {
          "mobile": galleryImgNames.length ? galleryImgNames[2].fileName : product.gallery.third.mobile,
          "tablet": galleryImgNames.length ? galleryImgNames[2].fileName : product.gallery.third.tablet,
          "desktop": galleryImgNames.length ? galleryImgNames[2].fileName : product.gallery.third.desktop,
        }
      }
    };

    fetch(`http://localhost:3333/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProductData),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Product updated successfully!!");
        setTimeout(() => navigate('/admin/all-products'), 2000);
      })
      .catch((error) => {
        toast.error(`Something went wrong!! ${error}`);
      });
  };


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
        >
          {
  
            product.category == 'headphones'? (
            <option value="headphones" selected>HeadPhone</option>
            ) : (
            <option value="headphones">HeadPhone</option>
            )
          }
          {
            product.category == 'speakers'? (
              <option value="speakers" selected>Speaker</option>
            ) : (
              <option value="speakers">Speaker</option>
            )
          }
          {
            product.category == 'earphones'? (
              <option value="earphones" selected>Earphone</option>
            ) : (
              <option value="earphones">Earphone</option>
            )
          }
          
          
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
          {
            product.new ? (
              <input
                required
                id="bordered-radio-1"
                type="radio"
                value="true"
                name="isNew"
                onChange={(e) => console.log(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100"
                checked
              />
            ) : (
              <input
                required
                id="bordered-radio-1"
                type="radio"
                value="true"
                name="isNew"
                onChange={(e) => console.log(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100"
              />
            )
          }
          <label
            htmlFor="bordered-radio-1"
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900"
          >
            True
          </label>
        </div>
        <div className="flex items-center">
          {
            product.new ? (
              <input
                required
                id="bordered-radio-2"
                type="radio"
                value="false"
                name="isNew"
                className="w-4 h-4 text-blue-600 bg-gray-100"
              />
            ) : (
              <input
                required
                id="bordered-radio-2"
                type="radio"
                value="false"
                name="isNew"
                className="w-4 h-4 text-blue-600 bg-gray-100"
                checked
              />
            )
          }
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
          <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Change Product Image</label>
          <input onChange={(e) => handleUploadingProductImage(e.target.files[0]) } className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" />
        </div>

        <div className="mb-5">  
          <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Change Product Gallery</label>
          <input onChange={(e) => handleUploadingGallery(e.target.files)} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" multiple/>
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
