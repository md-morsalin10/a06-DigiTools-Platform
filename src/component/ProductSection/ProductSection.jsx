import React, { use } from 'react';
import SingleProduct from './SingleProduct';

const ProductSection = ({productPromise,carts, setCarts}) => {
    const productData = use(productPromise);
    // console.log(productData);
    
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-3 gap-8'>
            {
                productData.map(product=> <SingleProduct carts={carts} setCarts={setCarts} key={product.id} product={product}></SingleProduct>)
            }
        </div>
    );
};

export default ProductSection;