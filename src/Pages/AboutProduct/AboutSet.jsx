import React from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
} from "keep-react";
import {
  ArrowsOutSimple,
  Bed,
  Heart,
  MapPinLine,
  Play,
  Rows,
  ShoppingCart,
  Shower,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  Users,
} from "phosphor-react";
const AboutSet = ({item}) => {
    return (
      <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
<div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white  rounded-xl bg-clip-border flex flex-col items-center">
  <img
    src={item.image}
    style={{height:'250px',width:'250px'}}
  />
   <div className=' absolute right-1'>
  <p className={`px-1 py-1 rounded ${item.stock === 'stock in' ? 'bg-green-400 text-white font-bold' : 'bg-red-500 text-white font-bold'}`}>{item.stock}</p>
  </div>
</div>
<div className="p-2">
  <div className="flex items-center justify-between mb-2">
    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
    {item.product_name} {item.kg === item.kg ? <>{item.kg}</> : ''}
    </p>
    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
    {item.price}Tk
    </p>
  </div>
  <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
    With plenty of talk and listen time, voice-activated Siri access, and an
    available wireless charging case.
  </p>
</div>
<div className="p-6 pt-0 flex gap-2 items-center">
{
                item.stock === 'stock out' ? <button disabled className="btn  btn-secondary"
                type="button">Add To Cart</button> :<button className="btn  btn-secondary">Add To Cart</button>
              }
  {
                item.stock === 'stock out' ? <button disabled className="btn btn-accent"
                type="button">Order Now</button> : <Link to={`/products/${item._id}`}><button className="btn btn-accent">Order Now</button></Link>
              }
    <button
      
    >
      
    </button>
</div>
</div>
  </div>

    );
};

export default AboutSet;