import React from 'react';
import banner from "../../assets/banner.png"
import bannerLogo from "../../assets/banner-logo.png"
import { IoPlayOutline } from 'react-icons/io5';
 
const BannerSection = () => {
    return (
        <div className='w-full lg:max-w-7xl mx-auto p-10 flex flex-col-reverse lg:flex-row justify-center items-center gap-15 py-12 lg:py-21'>
            <div className='space-y-5'>
                <div className='flex justify-center items-center gap-1 bg-[#E1E7FF] py-2 px-4 w-75 rounded-full'>
                    <img src={bannerLogo} alt="" />
                    <p className='font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                </div>
                <h2 className='text-5xl lg:text-7xl py-1 font-bold text-[#101727]'>Supercharge Your <br /> Digital Workflow</h2>
                <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products
                </p>
                <div className='flex gap-4 items-center'>
                    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold px-6 py-3 rounded-full text-white border-2 border-[#9514FA] hover:bg-none hover:bg-transparent hover:text-[#9514FA] transition-all duration-300'>Explore Products</button>

                    <button className='flex gap-2 justify-center font-semibold items-center px-8 py-3 rounded-full border-2 border-[#9514FA] text-[#9514FA] hover:bg-[#9514FA] hover:text-white transition-all'> <IoPlayOutline size={22} />Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default BannerSection;