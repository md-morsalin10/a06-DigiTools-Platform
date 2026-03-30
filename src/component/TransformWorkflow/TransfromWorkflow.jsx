import React from 'react';

const TransformWorkflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-15'>
            <div className='max-w-7xl mx-auto flex flex-col justify-center items-center py-10'>
                <div className='text-center space-y-2'>
                    <h2 className='text-5xl font-bold text-white'>Ready to Transform Your Workflow?</h2>
                    <p className='text-white opacity-90'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                </div>
                <div className='flex gap-2 justify-center items-center py-6'>
                    <button className='font-semibold w-42 border border-white  py-3 bg-white rounded-full text-[#9514FA]'>Explore Products</button>

                    <button className='font-semibold w-40 py-3 bg-transparent text-white rounded-full border border-white'>View Pricing</button>
                </div>
                <div>
                    <p className='text-white opacity-90'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default TransformWorkflow;