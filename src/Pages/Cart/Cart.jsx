import React from 'react';
import SetCart from '../../hooks/SetCart';

const Cart = () => {
    const [cart]= SetCart()
    console.log(cart)
    return (
        <div>
            
        </div>
    );
};

export default Cart;