import React from 'react';

const SingleCart = ({ cart,carts,setCarts }) => {
    // console.log(cart);
    const handleDeleteBtn = (targetCart) => {
        const filterItem = carts.filter((item)=> item.id !== targetCart.id);
        setCarts(filterItem)
        
    }

    return (
        <div className='flex justify-between items-center border border-gray-200 p-5 rounded-2xl bg-base-200'>
            <div className='flex gap-4'>
                <div className='flex justify-center items-center'>
                    <img className='object-contain h-8 w-8' src={cart.icon} alt="" />
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>{cart.name}</h2>
                    <h2 className='text-[#627382]'>${cart.price}</h2>
                </div>
            </div>
            <div>
                <button onClick={()=>handleDeleteBtn(cart)} className='text-[#FF3980] btn font-bold'>Remove</button>
            </div>
        </div>
    );
};

export default SingleCart;