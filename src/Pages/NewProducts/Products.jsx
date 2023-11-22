import React from 'react';
import SetAllProduct from '../../hooks/SetAllProduct';
import All from './All';
import Loding from '../Sheard/Loding/Loding';
import ContactButton from '../../Component/ContactButton';


const Products = () => {
    const [products,loading,setProduct]=SetAllProduct()
    const handelSearch=(event)=>{
        event.preventDefault()
        const search=event.target.search.value;
        const remaning= products.filter(product => product.product_name.toLowerCase().includes(search))
        setProduct(remaning)
        console.log(search)
        
    }
 
    if (loading) {
        return <Loding></Loding>
    }
    return (
        <div className='mx-auto w-11/12'>
         <h2 className=' uppercase text-center text-4xl pt-28'>All Products</h2> 
     <div className='flex justify-center mt-4'>
     <form onSubmit={handelSearch}>
             <div className="flex items-center">
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search..."
        name='search'
      />
      <button
        type="submit"
      
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
        </form>
      
     </div>
         <div className=' mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
            {
                products.map(item => console.log(item))
            }
            {
                products.map((item) => <All item={item} key={item._id}></All>)
            }
         </div>
         <ContactButton></ContactButton>
        </div>
    );
};

export default Products;