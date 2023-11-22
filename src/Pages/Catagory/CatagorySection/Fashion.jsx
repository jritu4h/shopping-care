import React from 'react';
import All from '../../NewProducts/All';
import SetProduct from '../../../hooks/SetProduct';

const Fashion = () => {
    const [Product, refetch, loading] = SetProduct()
    const Fashions = Product.filter(item => item.category === 'fashion')
    return (
        <div className=' py-6'>
             <div className='mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
                  {Fashions.map(item => <All item={item} key={item._id} loading={loading}></All>)}
                </div> 
        </div>
    );
};

export default Fashion;