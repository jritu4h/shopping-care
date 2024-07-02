import React from 'react';
import { Link } from 'react-router-dom';
import Loding from '../Sheard/Loding/Loding';
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
const All = ({ item, loading }) => {
  if (loading) {
    return <Loding></Loding>
  }
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border ">
    <div className="relative mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border flex flex-col items-center">
      <img src={item.image} style={{ height: '150px' }} />
      <div className="absolute right-1">
        <p className={`px-1 py-1 rounded ${item.stock === 'stock in' ? 'bg-green-400 text-white font-bold' : 'bg-red-500 text-white font-bold'}`}>{item.stock}</p>
      </div>
    </div>
    <div className="p-2">
      <div className="lg:flex items-center justify-between mb-2 flex-col">
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
          {item.product_name} {item.kg === item.kg ? <>{item.kg}</> : ''}
        </p>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
          {item.price}Tk
        </p>
      </div>
      {/* <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
        With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
      </p> */}
    </div>
    <div className="p-3 gap-3 items-center lg:flex">
      <div className=' my-1'>
      {item.stock === 'stock out' ? (
        <button disabled className="btn btn-outline btn-secondary" type="button">
          Add To Cart
        </button>
      ) : (
        <button className="btn btn-outline btn-secondary">Add To Cart</button>
      )}
      </div>
     
     <div className=" my-1">
     {item.stock === 'stock out' ? (
        <button disabled className="btn btn-outline btn-accent" type="button">
          Order Now
        </button>
      ) : (
        <Link to={`/products/${item._id}`}>
          <button className="btn btn-outline btn-accent">Order Now</button>
        </Link>
      )}
     </div>
     
    </div>
  </div>
  
  );
};

export default All;