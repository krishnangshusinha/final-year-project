import React from "react";
import logo from "../images/logo.png";

const Contact = () => {
    return (
        <>
            <div className="mt-8 mb-8">
                <div className="w-full text-center mt-10 p-4">
                    <p className="text-5xl font-bold mb-4">Contact Us</p>
                    <div className="flex justify-center">
                        <img src={logo} className="h-40 w-30 mt-8"/>
                    </div>
                </div>
                <div className="w-full text-center mt-8 flex flex-col gap-6">
                    <p><span className="text-2xl font-bold">Jadavpur University Complaint Management System</span>  <br/> 5, S.N.Banerjee Road,Kolkata 700 013, India <br/>Ph : +91 33 2286-1000 (28 Lines)</p>
                    <p><span className="text-2xl font-bold">Control Room</span>  <br/> Ph: +91 33 2286-1212/1313/1414 <br/> Fax +91 33 2286-1444</p>
                    <p><span className="text-2xl font-bold">Call Centre</span>  <br/> JUMC Working Days <br/> Mon-Fri : 10:00 AM to 6:00 PM <br/> Sat : 10:00 AM to 5:00 PM <br/> Ph : 2226-9909 <br/> 18003453375 (Toll Free) </p>
                    <p><span className="text-2xl font-bold">WhatsApp</span>  <br/> Ph:8335988888 </p>
                    <p><span className="text-2xl font-bold">ChatBot</span>  <br/> Ph:8335999111 </p>
                </div>
            </div>
        </>
    );
}

export default Contact;