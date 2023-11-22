import React from 'react';
import SetProduct from '../../../hooks/SetProduct';
import All from '../../NewProducts/All';

const Electronics = () => {
    const [Product, refetch, loading] = SetProduct()
    const Electronics = Product.filter(item => item.category === 'electronics')
    return (
        <div className=' py-6'>
             <div className='mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
                  {Electronics.map(item => <All item={item} key={item._id} loading={loading}></All>)}
                </div>
        </div>
    );
};

export default Electronics;