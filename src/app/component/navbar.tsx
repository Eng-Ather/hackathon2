'use client'
import React, { useState } from "react";
import Image from "next/image";

import navbarbadge from "@/app/images/navbarbadge.png";
import headerimage from "@/app/images/headerimage.png";
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
        <div className="w-full h-[60px] md:h-[136px]">

              {/* Header Image (hidden on small screens) */}
              <div className="w-full h-[58px] hidden lg:block">
                <Image
                    src={headerimage}
                    alt="header image"
                    layout="responsive" // Ensures it adjusts to width
                    width={1440}
                    height={58}
                    objectFit="cover"
                />
            </div>

            {/* Navbar */}
            <div className="w-full md:w-[1042px] h-[58px] mx-auto flex justify-between items-center px-5">

                {/* Badge image */}
                <div className="w-[187px] h-[58px]">
                    <Image
                        src={navbarbadge}
                        alt="NAV BAR image"
                        width={187}
                        height={58}
                    />
                </div>

                {/* Centered Links Container */}
                <div className="flex flex-grow justify-center">
                    {/* Navigation links (hidden on mobile by default) */}
                    <div className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 ${isMenuOpen ? "block w-full absolute top-[58px] left-0 bg-white px-4 py-4" : "hidden md:flex"} items-center justify-center`}>
                        <Link href="/" className="text-center">Home</Link>
                        <Link href="/" className="text-center">Shop</Link>
                        <Link href="/About" className="text-center">About</Link>
                        <Link href="/" className="text-center">Blog</Link>
                        <Link href="/" className="text-center">Contact</Link>
                        <Link href="/" className="text-center">Pages</Link>

                        {/* Login, Search & Cart Icons */}
                        <div className="flex items-center space-x-4">
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
                </div>

                {/* Hamburger menu for small screens (on the right side) */}
                <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
                    <span className="text-xl">
                        {isMenuOpen ? "X" : <FontAwesomeIcon icon={faBars} />}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Nav;
