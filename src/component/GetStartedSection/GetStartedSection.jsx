import React from 'react';
import user from '../../assets/user.png'
import pack from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const GetStartedSection = () => {
    return (
        <div className='max-w-7xl mx-auto py-25'>
            <div className='text-center space-y-3'>
                <h2 className='text-5xl font-bold text-[#101727]'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes not hours.</p>
            </div>
            <div className='grid grid-cols-1 p-7 lg:grid-cols-3 gap-10 pt-15'>

                <div className='flex flex-col justify-center items-center relative border-2 h-96 border-gray-200 p-10 rounded-2xl shadow'>
                    <div className='bg-pink-100 p-5 rounded-full'>
                        <img src={user} alt="" />
                    </div>
                    <div className='text-center py-4 space-y-4'>
                        <h2 className='text-2xl font-bold text-[#101727]'>Create Account</h2>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 px-3 rounded-full absolute top-1 right-2'>
                        <p className='text-white'>01</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center relative border-2 h-96 border-gray-200 p-10 rounded-2xl shadow'>
                    <div className='bg-pink-100 p-5 rounded-full'>
                        <img src={pack} alt="" />
                    </div>
                    <div className='text-center py-4 space-y-4'>
                        <h2 className='text-2xl font-bold text-[#101727]'>Choose Products</h2>
                        <p className='text-[#627382]'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                    </div>
                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 px-3 rounded-full absolute top-1 right-2'>
                        <p className='text-white'>02</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center relative border-2 h-96 border-gray-200 p-10 rounded-2xl shadow'>
                    <div className='bg-pink-100 p-5 rounded-full'>
                        <img src={rocket} alt="" />
                    </div>
                    <div className='text-center py-4 space-y-4'>
                        <h2 className='text-2xl font-bold text-[#101727]'>Start Creating</h2>
                        <p className='text-[#627382]'>Download and start using your premium <br /> tools immediately.</p>
                    </div>
                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 px-3 rounded-full absolute top-1 right-2'>
                        <p className='text-white'>03</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedSection;