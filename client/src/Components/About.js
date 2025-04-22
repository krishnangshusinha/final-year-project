import React from "react";
import municipality from "../images/mun.jpg"
import logo from "../images/logo.png";
import logo2 from "../images/logo.png"
import { Link } from "react-router-dom";


const About = () => {
    return (
        <>  
            <div className="z-0">
                <hr/>
                <div className="w-full text-center mt-10 p-4">
                    <p className="text-5xl font-bold">About Us</p>
                    <p className="text-lg mt-6 p-4 font-semibold text-gray-600">"JUMC will be efficient, effective, equitable, <br/> citizen responsive, financially sustainable and transparent,delivering quality service to its citizens."</p>
                </div>
                <section class="py-24 xl:mr-0 lg:mr-5 mr-0">
                    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                                <div class="w-full flex-col justify-center items-start gap-8 flex">
                                    <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                                        <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                            <h2
                                                class="text-brown-700 text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
                                                Jadavpur University Complaint Management Portal</h2>
                                            <p
                                                class="text-gray-700 text-lg font-normal leading-relaxed lg:text-start text-center">
                                                We have a vision.<br/>
                                                We believe that Kolkata has the potential to be one of the best cities of the world.<br/>
                                                We see Kolkata as a clean and attractive city of international repute in which all people have access to quality services.
                                            </p>
                                            <hr/>
                                            <p className="font-bold text-2xl mt-4">In our vision, JUMC will be :-</p>
                                        </div>
                                    </div>
                                    <div class="w-full flex-col justify-center items-start gap-6 flex">
                                        <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                            <div
                                                class="w-full h-full p-3.5 rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">Efficient and effective</h4>
                                                <p class="text-gray-500 text-base font-normal leading-relaxed">Providing service to its customers in a professional, economical, timely, useful and helpful manner.</p>
                                            </div>
                                            <div
                                                class="w-full h-full p-3.5 rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">Equitable
                                                </h4>
                                                <p class="text-gray-500 text-base font-normal leading-relaxed">Assuring service to all its citizens including the vulnerable and deprived groups in a fair, just and reasonable manner.</p>
                                            </div>
                                        </div>
                                        <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                            <div
                                                class="w-full p-3.5 rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">Financially sustainable</h4>
                                                <p class="text-gray-500 text-base font-normal leading-relaxed">Reducing JUMC’s dependence on state funds by optimising and efficiently managing its revenues</p>
                                            </div>
                                            <div
                                                class="w-full h-full p-3.5 rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">Transparent</h4>
                                                <p class="text-gray-500 text-base font-normal leading-relaxed">Providing an accountable and transparent civic administration for the benefit of external users as well as internal employees.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="https://www.kmcgov.in/KMCPortal/jsp/AboutUsVision.jsp" target="_blank">
                                    <button
                                        class="sm:w-fit w-full group px-3.5 py-2 bg-gray-200 hover:bg-gray-500 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                                        <span
                                            class="px-1.5 text-brown-900 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                                            More</span>
                                        <svg class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out text-brown-300"
                                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        
                                    </button>
                                </Link>
                            </div>
                            <div class="w-full lg:justify-start justify-center items-start flex">
                                <div
                                    class="sm:w-[564px] w-full sm:h-[646px] h-full  rounded-3xl">
                                    
                                    <div>
                                        <img src={logo2} class="h-full w-full rounded-xl" alt="logo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>                      
            </div>
        </>
    );
}

export default About;