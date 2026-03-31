import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

const Navbar = ({ carts }) => {
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 lg:px-20 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-40 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <h2 className='text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 text-[#101727] font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <span className='relative'><LuShoppingCart size={28} />
                        {carts.length > 0 && <span className='absolute rounded-full text-white px-1.5 bg-red-400 -top-3 left-4'>{carts.length}</span>}
                    </span>
                    <p className='font-medium'>Login</p>
                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]  w-35 py-2 rounded-full text-center text-white font-medium hover:border hover:border-[#9514FA] hover:bg-none hover:bg-transparent hover:text-[#9514FA] transition-all duration-300'>Get Started</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;