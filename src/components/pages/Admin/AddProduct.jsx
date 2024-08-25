import { useRef, useState } from "react";
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AddProduct(){
  const dynamicInputsRef = useRef(null);
  const [isValid, setIsValid] = useState(true);
  const [errs, setErrs] = useState('');
  const [productImgName, setProductImgName] = useState('');
  const [galleryImgNames, setGalleryImgNames] = useState([]);


  let val=0;
  const addFields = () => {
    const newInputGroup = document.createElement('div');
    newInputGroup.classList.add('mb-5');

    const quantityabel = document.createElement('label');
    quantityabel.htmlFor = 'quantity'+val;
    quantityabel.className = 'block mb-2 text-sm font-medium text-gray-900 ';
    quantityabel.innerText = 'quantity';

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.name = 'quantity'+val;
    quantityInput.id = 'quantity'+val;
    quantityInput.className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ';
    quantityInput.placeholder = ' ';
    quantityInput.required = true;
    
    newInputGroup.appendChild(quantityabel);
    newInputGroup.appendChild(quantityInput);

    const itemLabel = document.createElement('label');
    itemLabel.htmlFor = 'item'+val;
    itemLabel.className = 'block mb-2 text-sm font-medium text-gray-900 ';
    itemLabel.innerText = 'Item';

    const itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.name = 'item'+val;
    itemInput.id = 'item'+val;
    itemInput.className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ';
    itemInput.placeholder = ' ';
    itemInput.required = true;
    val++;
    newInputGroup.appendChild(itemLabel);
    newInputGroup.appendChild(itemInput);
    dynamicInputsRef.current.appendChild(newInputGroup);
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
    const includes = [];
    for (let i = 0; i < val; i++) {
        includes.push({
            quantity: parseInt(data[`quantity${i}`], 10),
            item: data[`item${i}`],
        });
        delete data[`quantity${i}`];
        delete data[`item${i}`];
    }

    console.log(productImgName);
    console.log(galleryImgNames);

    const productData = {
        id: Date.now().toString(),
        slug: data.slug,
        name: data.name,
        image: {
            mobile: `${productImgName}`,
            tablet: `${productImgName}`,
            desktop: `${productImgName}`
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
          "mobile": `${galleryImgNames[0].fileName}`,
          "tablet": `${galleryImgNames[0].fileName}`,
          "desktop": `${galleryImgNames[0].fileName}`,
        },
        "second": {
          "mobile": `${galleryImgNames[1].fileName}`,
          "tablet": `${galleryImgNames[1].fileName}`,
          "desktop": `${galleryImgNames[1].fileName}`,
        },
        "third": {
          "mobile": `${galleryImgNames[2].fileName}`,
          "tablet": `${galleryImgNames[2].fileName}`,
          "desktop": `${galleryImgNames[2].fileName}`,
        }
      },
      "others": [
        {
          "slug": "zx7-speaker",
          "name": "ZX7 Speaker",
          "image": {
            "mobile": "/products/assets/shared/mobile/image-zx7-speaker.jpg",
            "tablet": "/products/assets/shared/tablet/image-zx7-speaker.jpg",
            "desktop": "/products/assets/shared/desktop/image-zx7-speaker.jpg"
          }
        },
        {
          "slug": "xx99-mark-one-headphones",
          "name": "XX99 Mark I",
          "image": {
            "mobile": "/products/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
            "tablet": "/products/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
            "desktop": "/products/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
          }
        },
        {
          "slug": "xx59-headphones",
          "name": "XX59",
          "image": {
            "mobile": "/products/assets/shared/mobile/image-xx59-headphones.jpg",
            "tablet": "/products/assets/shared/tablet/image-xx59-headphones.jpg",
            "desktop": "/products/assets/shared/desktop/image-xx59-headphones.jpg"
          }
        }
      ]
    };

    fetch('http://localhost:3333/products', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
      })
      .then(response => response.json())
      .then(data => {
          toast.success('Product added successfully!!');
      })
      .catch((error) => {
          toast.error(`Something went wrong!! ${error}`);
      });
  }

    return(
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 mb-5">
            <ToastContainer />
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name </label>
            <input required type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder=" " />
        </div>
        <div className="mb-5">
            <label htmlFor="slug" className="block mb-2 text-sm font-medium text-gray-900 ">Slug</label>
            <input required type="text" name="slug" id="slug" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder=" " />
        </div>

        <div className="mb-5 ">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
        <select id="countries" name="catigory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option selected>Choose a catigory</option>
            <option value="headphones"> HeadPhone</option>
            <option value="speakers">Speaker</option>
            <option value="earphones">Earphone</option>
        </select>  
        </div>
        
        <div className="mb-5">
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
            <input required type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder=" " />
        </div>

        <div className="mb-5 flex ">
        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 ">Is New</label>
            <div className="  flex items-center">
                <input required id="bordered-radio-1" type="radio" value="true" name="isNew" className="w-4 h-4 text-blue-600 bg-gray-100   dark:ring-offset-gray-800  "/>
                <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 ">True </label>
            </div>
            <div className=" flex items-center">
                <input required checked id="bordered-radio-2" type="radio" value="false" name="isNew" className="w-4 h-4 text-blue-600 bg-gray-100 dark:ring-offset-gray-800  "/>
                <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 ">False</label>
            </div>
         </div>
         <div className="mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
            <textarea required id="message" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
        </div>

         <div className="mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Feature</label>
            <textarea required id="message" name="feature" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
        </div>
        <div className="mb-5">  
          <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Product Image</label>
          <input required onChange={(e) => handleUploadingProductImage(e.target.files[0]) } className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" />
        </div>

        <div className="mb-5">  
          <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Product Gallery</label>
          <input required onChange={(e) => handleUploadingGallery(e.target.files)} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" multiple/>
        </div>

        <div id="dynamicInputs" ref={dynamicInputsRef} >
       </div>
        <button type="button" onClick={addFields} className="text-white mr-5 mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" > Include </button>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    );
}
export default AddProduct;