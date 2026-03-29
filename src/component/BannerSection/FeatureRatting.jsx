import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const FeatureRatting = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-16 mb-10'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-3'>
                <div className='flex flex-col justify-center items-center space-y-3 py-10 lg:py-0 lg:border-r border-white/20'>
                    <h2 className='text-6xl font-bold'>50K+</h2>
                    <p className='text-xl font-medium opacity-85'>Active Users</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3 py-10 lg:py-0 lg:border-r border-white/20'>
                    <h2 className='text-6xl font-bold'>200+</h2>
                    <p className='text-xl font-medium opacity-85'>Premium Tools</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3 '>
                    <h2 className='text-6xl font-bold'>4.9★</h2>
                    <p className='text-xl font-medium opacity-85'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureRatting;