import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const SingleProduct = ({ product, carts, setCarts }) => {
    const { icon, name, description, features, period, price, tag } = product

    const [isClicked, setIsClicked] = useState(false);
    
    const handleBuyBtn =(product)=> {
        setCarts([...carts, product])
        setIsClicked(true)
    }
    return (
        <div className='shadow-xl border border-gray-300 p-6 space-y-2 rounded-2xl relative'>
            <div className='bg-white rounded-2xl'>
                <img className='object-contain h-15 w-15' src={icon} alt={name} />
            </div>
            <div className='space-y-4'>
                <h3 className='text-2xl font-bold text-[#101727]'>{name}</h3>
                <p className='text-[#627382]'>{description}</p>

                <div className='flex items-end'>
                    <h1 className='text-3xl font-bold text-[#101727]'>${price}</h1>
                    <span className='text-[#627382]' >/{period}</span>
                </div>
                <div>
                    {
                        features.map((singleFeature, ind) =>
                            <p className='flex items-center gap-1 text-[#627382] font-medium' key={ind}>
                                <FaCheck className='text-green-500' /> {singleFeature}
                            </p>)
                    }
                </div>
                <div className={`text-center absolute top-3 right-3 py-1.5 rounded-full px-4  font-semibold text-sm
                 ${tag?.toLowerCase() === 'popular' ? 'text-[#9514FA] bg-[#E1E7FF]' : tag?.toLowerCase() === 'best seller' ? 'bg-[#FEF3C6] text-red-500' : 'text-green-500 bg-green-100'}`}>
                    <p>{tag}</p>
                </div>
            </div>
            <button onClick={()=>handleBuyBtn(product)} className={`w-full ${isClicked ? 'bg-green-500' : 'bg-linear-to-r from-[#4F39F6]  to-[#9514FA]'} py-3 font-semibold  text-white rounded-full`}>{isClicked ? 'Added to Cart' : 'Buy Now'}</button>


        </div>
    );
};

export default SingleProduct;