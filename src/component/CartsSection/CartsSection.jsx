import React from 'react';
import SingleCart from './SingleCart';
import noCart from '../../assets/no-cart.png'
import { toast } from 'react-toastify';

const CartsSection = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0)

    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment Successful", {
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
        <div className='p-10'>
            <div className='max-w-7xl mx-auto lg:p-10 border border-gray-300 rounded-xl mb-7'>

                {carts.length === 0 && <div className='flex flex-col justify-center space-y-4  bg-base-200 rounded-2xl items-center h-60'>
                    <div>
                        <img className='h-20 w-20 ' src={noCart} alt="" />
                    </div>
                    <p className='font-semibold'>No Carts Available</p>
                </div>}

                {carts.length > 0 &&
                    <h2 className='font-bold text-xl text-[#101727] pb-5'>Your Cart</h2>
                }
                <div className='space-y-4'>
                    {
                        carts.map(cart => <SingleCart setCarts={setCarts} carts={carts} key={cart.id} cart={cart}></SingleCart>)
                    }
                </div>

                {carts.length > 0 &&
                    <div className='flex justify-between items-center p-6'>
                        <div>
                            <p className='text-2xl font-bold'>Total</p>
                        </div>
                        <div>
                            <p className='text-2xl font-bold'>${totalPrice}</p>
                        </div>
                    </div>
                }

                {carts.length > 0 &&
                    <div>
                        <button onClick={() => handlePayment()} className='w-full py-4 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold'>Proceed To Checkout</button>
                    </div>
                }

            </div>

        </div>
    );
};

export default CartsSection;