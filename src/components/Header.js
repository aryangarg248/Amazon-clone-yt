import React from 'react'
import Image from "next/image"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon


} from "@heroicons/react/outline"
function Header() {
    return (
        <header>
            {/* {top headeer} */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* Search bar */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/* Right header */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
                    <div className=" link ">
                        <p>Hello Aryan garg</p>
                        <p className="font-extrabold md: text-sm">Account and lists</p>

                    </div>
                    <div className=" link ">
                        <p>returns</p>
                        <p className="font-extrabold md: text-sm">& orders</p>
                    </div>
                    <div className="relative flex items-center link ">

                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">4</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md: text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
            {/* bottom header */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className = "link flex items-center"><MenuIcon className="h-6 mr-1" />All</p>
                <p className ="link">Amazon pay</p>
                <p className ="link">Pantry</p>
                <p className ="link">Today's Deals</p>
                <p className ="link hidden lg:inline-flex">Aryan's Amazon.in</p>
                <p className ="link hidden lg:inline-flex">Gift Cards</p>
                <p className ="link hidden lg:inline-flex">Coupons</p>
                <p className ="link hidden lg:inline-flex">Sports</p>
                <p className ="link hidden lg:inline-flex">Electronics</p>

            </div>
        </header>
    )
}

export default Header
