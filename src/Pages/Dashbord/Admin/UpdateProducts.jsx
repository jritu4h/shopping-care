import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
const ImageApi= import.meta.env.VITE_PHOTO
const UpdateProducts = () => {

const UpdateData=useLoaderData()
console.log(UpdateData)
    const [disible,setdisible]=useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${ImageApi}`
  // ...

const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
  
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        console.log(imageResponse);
        if (imageResponse.success) {
          const imageUrl = imageResponse.data.display_url;
          const { product_name, price, category, stock, kg } = data;
          const products = {
            $set: {
              product_name,
              price: parseFloat(price),
              category,
              kg,
              image: imageUrl,
              stock,
            },
          };
  
          axios.patch(`https://lazy-cyan-donkey-veil.cyclic.app/products/${UpdateData._id}`, products)
            .then((response) => {
              if (response.data.insertedId) {
                Swal.fire('Added!', 'Successful!', 'success');
              }
            });
        }
      });
  };
  
  // ...
  

    const handelKg=()=>{
        setdisible(!disible); 
    }
    return (
        <div>
              <div>
             <div className="w-full px-10">
                <h2 className=' text-center py-5 text-4xl font-bold'>Update Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input defaultValue={UpdateData.product_name} type="text" placeholder="Recipe Name"
                        {...register("product_name", { required: false, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4 gap-3">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: false })} className="select select-bordered">
                            <option >{UpdateData.category}</option>
                            <option>Dray Foods</option>
                            <option>ayurvedic</option>
                            <option>cooking</option>
                            <option>electronics</option>
                            <option>it products</option>
                            <option>fashion</option>
                          
                          
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Stock*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("stock", { required: false })} className="select select-bordered">
                            <option>{UpdateData.stock}</option>
                            <option>stock in</option>
                            <option>stock out</option>
                          
                          
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Product Kg*<span>Optional</span></span> 
                        </label>
                        <select disabled={disible}   defaultValue="Pick One" {...register("kg", { required: false })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>500Gm</option>
                            <option>1Kg</option>
                            <option>1.5Kg</option>
                            <option>2Kg</option>
                          
                          
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input defaultValue={UpdateData.price} type="number" {...register("price", { required: false })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span> <br /> <span className=' text-red-500'>To update your product, you must change the product image</span>
                    </label>
                    <input type="file"  {...register("image", { required: false })} className="file-input file-input-bordered w-full " />
                </div>
            <button className="btn btn-sm mt-4 btn-success" type="submit">Update Item</button>
            </form>
           <div>
           <button className="btn btn-sm mt-4 btn-primary " onClick={handelKg}>  {disible ? 'Unlock Kg Field ?' : 'Lock Kg Field ?'}</button>
           </div>
        </div>
        </div> 
        </div>
    );
};

export default UpdateProducts;