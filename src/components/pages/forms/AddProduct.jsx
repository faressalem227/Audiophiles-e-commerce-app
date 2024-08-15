import { useRef } from "react";
function AddProduct(){
  const dynamicInputsRef = useRef(null);
  let val=0;
  const addFields = () => {
    const newInputGroup = document.createElement('div');
    newInputGroup.classList.add('mb-5');

    const quantityabel = document.createElement('label');
    quantityabel.htmlFor = 'quantity'+val;
    quantityabel.className = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
    quantityabel.innerText = 'quantity';

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.name = 'quantity'+val;
    quantityInput.id = 'quantity'+val;
    quantityInput.className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    quantityInput.placeholder = ' ';
    quantityInput.required = true;
    
    newInputGroup.appendChild(quantityabel);
    newInputGroup.appendChild(quantityInput);

    const itemLabel = document.createElement('label');
    itemLabel.htmlFor = 'item'+val;
    itemLabel.className = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
    itemLabel.innerText = 'Item';

    const itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.name = 'item'+val;
    itemInput.id = 'item'+val;
    itemInput.className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    itemInput.placeholder = ' ';
    itemInput.required = true;
    val++;
    newInputGroup.appendChild(itemLabel);
    newInputGroup.appendChild(itemInput);
    dynamicInputsRef.current.appendChild(newInputGroup);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
    const productData = {
        id: Date.now(),
        slug: data.slug,
        name: data.name,
        image: {
            mobile: data.image.name,
            tablet:data.image.name,
            desktop :data.image.name
        },
        category: data.catigory.toLowerCase(),
        categoryImage: {
            mobile: data.categoryImage.name ,
            tablet: data.categoryImage.name,
            desktop: data.categoryImage.name
        },
        new: data.isNew,
        price: parseInt(data.price, 10),
        description: data.description,
        features: data.feature,
        includes: includes,
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
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

    return(
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 mb-5">
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name </label>
            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
        </div>
        <div className="mb-5">
            <label htmlFor="slug" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
            <input type="text" name="slug" id="slug" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
        </div>

        <div className="mb-5 ">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
        <select id="countries" name="catigory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a catigory</option>
            <option value="HeadPhone"> HeadPhone</option>
            <option value="Speaker">Speaker</option>
            <option value="Earphone">Earphone</option>
        </select>  
        </div>
        
        <div className="mb-5">
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
        </div>

        <div className="mb-5 flex ">
        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is New</label>
            <div className="  flex items-center">
                <input id="bordered-radio-1" type="radio" value="true" name="isNew" className="w-4 h-4 text-blue-600 bg-gray-100   dark:ring-offset-gray-800  "/>
                <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">True </label>
            </div>
            <div className=" flex items-center">
                <input checked id="bordered-radio-2" type="radio" value="false" name="isNew" className="w-4 h-4 text-blue-600 bg-gray-100 dark:ring-offset-gray-800  "/>
                <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">False</label>
            </div>
         </div>
         <div className="mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="message" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>

         <div className="mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feature</label>
            <textarea id="message" name="feature" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
         <div className="mb-5"> 
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
            <input name="image" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
        </div>
         <div className="mb-5"> 
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Upload multiple files</label>
        <input name="categoryImage" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple/>
        </div>
        <div id="dynamicInputs" ref={dynamicInputsRef} >
       </div>
        <button type="button" onClick={addFields} className="text-white mr-5 mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" > Include </button>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    );
}
export default AddProduct;