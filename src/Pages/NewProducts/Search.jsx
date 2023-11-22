import React from 'react';

const Search = ({products,setProduct}) => {
    const handelSearch=(event)=>{
        event.preventDefault()
        const search=event.target.search.value;
        const remaning= products.filter(products => products.product_name.toLowerCase().includes(search))
        setProduct(remaning)
    }
    return (
        <div>
            
        </div>
    );
};

export default Search;