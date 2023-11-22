// import React from 'react';
// import SetAllProduct from '../../hooks/SetAllProduct';

// const Filter = ({setProduct}) => {
//     const [products]=SetAllProduct()
//     const HandelFilter = (e) => {
//         e.preventDefault();
//         const minPrice = e.target.elements.min.value;
//         const maxPrice = e.target.elements.max.value;
//         const filteredProducts = products.filter((product) =>{
//             const productPrice = parseFloat(product.price);
//             if (minPrice && maxPrice) {
//                 return productPrice >= parseFloat(minPrice) && productPrice <= parseFloat(maxPrice);
//               } else if (minPrice) {
//                 return productPrice >= parseFloat(minPrice);
//               } else if (maxPrice) {
//                 return productPrice <= parseFloat(maxPrice);
//               }
              
//               return true;
//         })
//         setProduct(filteredProducts);
//       };
//     return (
//         <form onSubmit={HandelFilter} className=' ps-3'>
//         <div className="space-y-2">
//           <div className="flex space-x-2">
//             <label className="text-gray-600">Min Price:</label>
//             <input
//               type="number"
//               name="min"
//               className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="flex space-x-2">
//             <label className="text-gray-600">Max Price:</label>
//             <input
//               type="number"
//               name="max"
//               className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <button className='btn'>Filter</button>
//         </div>
//       </form>
      
//     );
// };

// export default Filter;