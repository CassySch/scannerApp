import React from "react";
import Logo from "./Logo";
import Link from "next/link";
const Header = () => {
    return (
        <div
            className="bg-red-800 flex h-20"> {/* Center the content horizontally and vertically */}
            <div className="flex items-center w-fit max-w-screen-lg ">
                <Logo/>
            </div>
            <div className="flex items-center w-full max-w-screen-lg px-80 ">
                <h1 className="text-white text-lg">3D Scanner</h1> {/* Centered text */}
            </div>

        </div>
    );
};

export default Header;