import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetilsReview = () => {
    const data =useLoaderData()
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <img src={data.photo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="">{data.name}</h1>
      <p className="py-4">Review: {data.review}.</p>
      <div className=' flex justify-center'>
      <button className="btn btn-primary">Back</button>
      </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default DetilsReview;