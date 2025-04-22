import React from "react";
import logo from "../images/logo.png";
import account from "../images/account.png"
import { IoIosSearch } from "react-icons/io";
import municipality from "../images/mun.jpg"
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
    return (
        <>
            <div id="home">
                {/* Upper part logo + background */}
                <div>
                    <div className="flex justify-between bg-gradient-to-tr from-gray-900 to-gray-500 relative" >

                        <img src={municipality} class=" h-full w-full absolute mix-blend-overlay" alt="logo"/>

                        <div className="flex gap-3 p-10" >
                            <img src={logo} class="object-scale-down h-28 w-86" alt="logo"/>

                            <div className=" flex flex-col justify-evenly ">
                                <p className="antialiased text-3xl font-bold text-white ">যাদবপুর বিশ্ববিদ্যালয় অভিযোগ ব্যবস্থাপনা পোর্টাল</p>
                                <p className="antialiased text-3xl font-bold text-white">Jadavpur University Complaint Management Portal</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Navbar part */}
                <div className="bg-gradient-to-r from-red-300 to-red-400">
                    <div className="navbar flex">
                        <div className="flex flex-row justify-between w-full">
                        
                            <div className="form-control flex flex-row mr-2">
                                <p className="m-3 mr-2 text-1xl font-semibold">Search</p>
                                <input type="text" placeholder="Type Keyword..." className="input input-bordered w-24 md:w-auto" />
                                <button className=""><FaSearch className="m-2 text-2xl font-bold"/></button>
                            </div>

                            <div className="flex gap-8">

                                <div className="flex">
                                    <a href="#about" className="m-4  font-bold text-lg">About Us</a>
                                    <a href="#contact" className="m-4  font-bold text-lg">Contact Us</a>
                                    <a href="#faq" className="m-4  font-bold text-lg">FAQ</a>
                                </div>

                                <div className="mt-1 dropdown dropdown-end">

                                    <Link to="/login">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <RiAccountCircleFill className="text-5xl" />
                                        </div>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Navbar;