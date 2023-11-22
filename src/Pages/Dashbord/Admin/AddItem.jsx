import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from "sweetalert2";
const AddItem = () => {
    const [disible,setdisible]=useState(true)
    const [axiosSecure]=UseAxiosSecure()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const ImageApi= import.meta.env.VITE_PHOTO
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=0e03e6fd87d65625fb492aeef0a051cc`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        
        fetch(img_hosting_url,{
            method:"POST",
            body:formData
        })
        .then(res => res.json())
        .then(imageResponse =>{
            console.log(imageResponse)
            if (imageResponse.success) {
                const ImageUrl=imageResponse.data.display_url;
                const {product_name,price,category,stock,kg}=data
                const products={product_name,price:parseFloat(price),category,kg,image:ImageUrl,stock}
                
                axiosSecure.post('/products',products)
                .then(data=>{
                  if (data.data.insertedId) {
                    Swal.fire(
                        'Added!',
                        'Successful!',
                        'success'
                      )
                  }
                })
            }
           
        })
    };

    const handelKg=()=>{
        setdisible(!disible); 
    }
    return (
        <div>
             <div className="w-full px-10">
             <h2 className=' text-center py-5 text-4xl font-bold'>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("product_name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4 gap-3">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Dray Foods</option>
                            <option>Foroce Own Products</option>
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
                        <select defaultValue="Pick One" {...register("stock", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
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
                            <option>250Gm</option>
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
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
            <button className="btn btn-sm mt-4 btn-success" type="submit">Add Item</button>
            </form>
           <div>
           <button className="btn btn-sm mt-4 btn-primary " onClick={handelKg}>  {disible ? 'Unlock Kg Field ?' : 'Lock Kg Field ?'}</button>
           </div>
        </div>
        </div>
    );
};

export default AddItem;