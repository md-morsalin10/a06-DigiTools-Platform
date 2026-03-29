import React, { useState } from 'react';

const ToolsTap = () => {
const [active, setActive] = useState("product")
    return (
        <div className='max-w-7xl mx-auto flex flex-col justify-center items-center pt-20 pb-10 space-y-5'>
            <div className='space-y-4'>
                <h2 className='text-center font-bold text-5xl text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box bg-transparent">
                    <input onClick={()=> setActive('product')} type="radio" name="my_tabs_1" className={`${active==="product" ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' :''} tab w-30 rounded-full text-[#25065D] font-semibold`} aria-label="Products" defaultChecked />
                    <input onClick={()=> setActive('cart')} type="radio" name="my_tabs_1" className={`${active==="cart" ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' :''} tab w-30 rounded-full text-[#25065D] font-semibold`} aria-label="cart (0)" />
                </div>
            </div>
        </div>
    );
};

export default ToolsTap;