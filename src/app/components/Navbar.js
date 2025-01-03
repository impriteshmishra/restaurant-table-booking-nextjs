"use-client"

import Link from 'next/link';
import React, { useState } from 'react'
import { AlignJustify } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="bg-orange text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                <div className="text-xl font-bold">
                    <p className='cursor-pointer'  onClick={(e) => {
                        router.push("/");
                    }}>Restaurant Table Booking</p>
                </div>


                <div className="hidden md:flex space-x-6">
                    <p className='cursor-pointer' onClick={(e) => {
                        router.push("/");
                    }}>Home</p>
                    <p className='cursor-pointer'  onClick={(e) => {
                        router.push("/about");
                    }}>About Us</p>
                    <p className='cursor-pointer'  onClick={(e) => {
                        router.push("/contact");
                    }}>Contact</p>
                </div>

                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none" onClick={toggleMenu}>
                        <AlignJustify color="#ffffff" />
                    </button>
                </div>
            </div>

            {
                isMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-4 p-4 flex  flex-col">
                            <Link href="/">
                                Home
                            </Link>
                            <Link href="/about">
                                About
                            </Link>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                )
            }


        </nav>
    );
};

export default Navbar
