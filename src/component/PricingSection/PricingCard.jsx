import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const PricingCard = ({ card }) => {
    console.log(card);
    const { planName, buttonText, description, price, period, features, isPopular, tag } = card

    return (
        <div className='relative group h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer'>
            <div className={` border border-gray-200 rounded-2xl flex flex-col h-full p-6 space-y-4 ${isPopular ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-base-200 text-[#101727]'}`}>
                <div>
                    <h2 className='text-2xl font-bold'>{planName}</h2>
                    <p className={`text-[#627382] ${isPopular && 'text-white opacity-80'}`}>{description}</p>
                </div>
                <div className='flex items-end'>
                    <h2 className='text-4xl font-bold'>${price}</h2>
                    <span className={`text-[#627382] ${isPopular && 'text-white opacity-80'}`}>/{period}</span>
                </div>
                <div className='flex flex-col grow'>
                    {
                        features.map((fea, ind) => <p key={ind} className='flex items-center py-2 gap-1'><IoCheckmarkSharp className={`text-green-500 ${isPopular && 'text-white'}`} /> {fea}</p>)
                    }
                </div>
                <div className='pt-4'>
                    <button className={`${isPopular ? 'bg-white text-[#9514FA]' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} rounded-full font-semibold w-full  py-3 `} >{buttonText}</button>
                </div>
            </div>

            {isPopular &&
                <div className='bg-[#FEF3C6] py-1 flex justify-center items-center rounded-full absolute left-35 -top-3 w-28'>
                    <p className='text-[#BB4D00]'>{tag}</p>
                </div>
            }

        </div>
    );
};

export default PricingCard;