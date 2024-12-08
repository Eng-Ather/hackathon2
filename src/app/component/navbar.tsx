
'use client'
import React, { useState } from "react";
import Image from "next/image";

import navbarbadge from "@/app/images/navbarbadge.png"
import headerimage from "@/app/images/headerimage.png"
import loginimage from "@/app/images/loginimage.png";
import addedproduct from "@/app/images/addedproduct.png";
import addtocart from "@/app/images/addtocart.png";
import searchicon from "@/app/images/searchicon.png";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu
    };

    return (
        <div className=" w-[1440px] h-[60px] md:h-[136px] ">

<div className="  w-[1440px] h-[58px]  hidden md:block">
                <Image
                    src={headerimage}
                    alt="header image"
                    width={1440}
                    height={58}
                />
            </div>



            {/* Navbar */}
            <div className=" w-[1042px] h-[58px] mx-auto flex">


                {/* badge image */}
                <div className="  w-[187px] h-[58px]">
                    <Image
                        src={navbarbadge}
                        alt="NAV BAR image"
                        width={187}
                        height={58}
                    />
                </div>




                <div className=" w-[815px] h-[58px] mx-auto flex justify-between items-center px-5">
                    {/* Navbar Links & Icons */}
                    <div className="flex items-center justify-between w-full">

                        {/* Navigation links */}
                        <div className={`flex items-center space-x-6 md:space-x-8 ${isMenuOpen ? "flex-col absolute top-[58px] bg-white w-[414px] left-20 px-4 py-4" : "hidden md:flex"}`}>
                            <Link href="/">Home</Link>
                            <Link href="/">Shop</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Blog</Link>
                            <Link href="/">Contact</Link>
                            <Link href="/">Pages</Link>

                            {/* Login, Search & Cart Icons inside hamburger */}
                            <div className="flex items-center space-x-4 flex-col md:flex-row space-y-4">
                                <div className="w-[166px] h-[54px]">
                                    <Link href="/">
                                        <Image
                                            src={loginimage}
                                            alt="Login"
                                            width={166}
                                            height={54}
                                        />
                                    </Link>
                                </div>
                                <div className="w-[46px] h-[46px]">
                                    <Link href="/">
                                        <Image
                                            src={searchicon}
                                            alt="Search"
                                            width={46}
                                            height={46}
                                        />
                                    </Link>
                                </div>
                                <div className="w-[56px] h-[46px]">
                                    <Link href="/">
                                        <Image
                                            src={addtocart}
                                            alt="Add to cart"
                                            width={46}
                                            height={46}
                                        />
                                    </Link>
                                </div>
                                <div className="w-[56px] h-[46px]">
                                    <Link href="/">
                                        <Image
                                            src={addedproduct}
                                            alt="Added product"
                                            width={46}
                                            height={46}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Hamburger menu for small screens */}
                        <div className=" md:hidden flex items- cursor-pointer" onClick={toggleMenu}>
                            <span className="text-xl">{isMenuOpen ? "X" : <i className="fa-solid fa-bars"></i>}</span> {/* Hamburger icon or close button */}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;

