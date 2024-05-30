import React from "react";
import Link from "next/link";
import Logo from "../header/Logo";
import Button from "./Button";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
            <div className="w-full h-10 bg-gray-300 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <ul className="hidden mx-auto md:flex gap-x-12 text-white ">
                            <li>
                                <Link href="/home">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/scan">
                                    <p>Scan</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/calibrate">
                                    <p>Calibrate</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p>About</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;