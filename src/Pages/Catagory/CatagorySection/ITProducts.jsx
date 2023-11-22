import React from 'react';
import SetProduct from '../../../hooks/SetProduct';
import All from '../../NewProducts/All';

const ITProducts = () => {
    const [Product, refetch, loading] = SetProduct()
    const it_products = Product.filter(item => item.category === 'it products')
    return (
        <div className='py-6'>
             <div className='mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
                  {it_products.map(item => <All item={item} key={item._id} loading={loading}></All>)}
                </div>
        </div>
    );
};

export default ITProducts;