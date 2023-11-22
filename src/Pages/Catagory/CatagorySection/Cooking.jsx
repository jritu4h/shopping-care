import React from 'react';
import SetProduct from '../../../hooks/SetProduct';
import All from '../../NewProducts/All';

const Cooking = () => {
    const [Product, refetch, loading] = SetProduct()
    const cooking = Product.filter(item => item.category === 'cooking')
    return (
        <div className=' py-6'>
          <div className='mt-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
                  {cooking.map(item => <All item={item} key={item._id} loading={loading}></All>)}
                </div> 
        </div>
    );
};

export default Cooking;