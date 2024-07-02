import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProbider';
import axios from 'axios';
import Swal from 'sweetalert2'
import SetCart from '../../hooks/SetCart';
import { FaShoppingCart } from 'react-icons/fa';
import SetDistric from '../../hooks/SetDistric';
import Loading from '../Sheard/Loding/Loding';
const Order = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
       setLoading(false) 
    }, 200);
},[])
  const navigate= useNavigate()
  const [distric]=SetDistric()
  const [, refetch] = SetCart()
  const { user } = useContext(AuthContext)
  const item = useLoaderData()
  console.log(item)
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const datetime = { day, month, year }
 
  const [selectedCity, setSelectedCity] = useState('');
  const [districtSelect, setDistrict] = useState('');
  const [quantity, setQuantity] = useState(1);
  const total = (item.price * quantity).toFixed(2);
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return <Loading></Loading>
  }
  const handelSubmit = (event) => {
  
    event.preventDefault()
   if (user && user.email) {
    const form = event.target

    const productName = form.productName.value;
    const price = parseFloat(form.price.value.replace(' Tk', ''));
    const userName = form.userName.value;
    const email = form.email.value;
    const city = event.target.citySelect.value
    const district = event.target.districtSelect.value;
    const address = form.Upazila.value;
    const phoneNumber = form.phoneNumber.value; 
    const newOrder = {
      productName,
      price,
      userName,
      email,
      city,
      district,
      address,
      phoneNumber,
      date: datetime,
      image: item.image,
      kg: item.kg,
      Ispending: "pending",
      category: item.category,
      quantity,

    }
    console.log(newOrder)
    axios.post('https://tawsif-shop-server.vercel.app/order', newOrder)
    .then(data => {
      console.log(data.data)

      if (data.data.insertedId) {
        Swal.fire(
          'Order!',
          'Successful!',
          'success'
        )
        refetch()
      }
    })
   }
   else{
    Swal.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Login Section'
        )
        navigate('/login')
      }
    })
  }
  }

  return (
    <div className=' pt-16'>
      <div className="hero min-h-screen">
        <div className="hero-content sm: max flex-col lg:flex-row">
          <img style={{ width: "300px" }} src={item.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mt-5">Order Now! <FaShoppingCart /> </h1>
            <div className="max-w-md mx-auto my-8 p-5 bg-white rounded shadow">
              <form onSubmit={handelSubmit}>
                <div className="mb-4">
                  <label htmlFor="productName" className="block text-gray-700 text-sm font-bold mb-2">
                    Product Name
                  </label>
                  <div className=' flex items-center gap-3'>
                    <input
                      type="text"
                      id="productName"
                      name="productName"
                      defaultValue={item.product_name}
                      required
                      readOnly
                      className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {
                      item.kg === item.kg ? <p>{item.kg}</p> : <p></p>
                    }
                  </div>

                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={`${total} Tk`}
                    readOnly
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

               {
                user ?  <div className="mb-4">
                <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  defaultValue={user?.displayName}
                  readOnly
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>:<></>
               }

               {
                user?  <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>:<></>
               }

            {
              user? <><div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="citySelect">Select a Capital City:</label>
              <select   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="citySelect">
                <option value="">Select a City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Khulna">Khulna</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Barisal">Barisal</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Rangpur">Mymensingh</option>
              </select>
            </div></>:<div></div>
            }
                {user ? <div>
                  <label htmlFor="district" className="block text-gray-700 text-sm font-bold mb-2">District:</label>
                  <select   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="districtSelect">
                    <option value="">Select a District </option>
                     {
                      distric.map(loc => <option value={loc.name} key={loc._id}>{loc.name}</option>)
                     }
                  </select>
                </div>:<></>}
              {user ?   <div>
                  <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Upazila:</label>
                  <input
                    id="Upazila"
                    name="Upazila"
                    rows="4"
                    cols="50"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>:<></>}
            {
              user ?     <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
              
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue=""
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>:<></>
            }
                <div className="mb-4">
                  <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(-1)} // Decrease quantity
                      className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-lg"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={quantity}
                      readOnly
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(1)} // Increase quantity
                      className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className=" uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Order now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;