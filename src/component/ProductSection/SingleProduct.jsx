import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SingleProduct = ({ product, carts, setCarts }) => {
    const { icon, name, description, features, period, price, tag } = product

    const [isClicked, setIsClicked] = useState(false);
    
    const handleBuyBtn =(product)=> {
        setCarts([...carts, product])
        setIsClicked(true)
        toast.success(`${name} added to your cart`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
    }
    return (
        <div className='group bg-white border border-gray-200 p-6 rounded-2xl relative 
                hover:shadow-lg hover:border-indigo-300  hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
            <div className='mb-4 bg-gray-50 w-14 h-14 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300'>
                <img className='object-contain  h-15 w-15' src={icon} alt={name} />
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