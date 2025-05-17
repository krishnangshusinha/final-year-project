import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import { FaStarOfLife } from "react-icons/fa";


const Main = () => {
    const [name , setName] = useState();
    const [cid , setID] = useState();
    const [type , setCategory] = useState();
    const [feedback , setFeedback] = useState();

    const submit = async () => {
        try {
            const {data} = await axios.post("https://final-year-project-9p1g.onrender.com/feedback", {name , cid , type , feedback});
            
            if( data?.success ){
                console.log(data.feed);
                document.getElementById('my_modal_3').close()
                window.location.reload();
            }     
        } 
        catch (error) {
            console.log(error);
            alert("error");
        }
    }


    return (
        <>
            <div className="flex">

                <div className="ml-2 mt-4 w-1/4 rounded-xl ">
                    <ul className="text-2xl text-center bg-red-900 p-2 text-white border-solid border-4 border-gray-600">
                        <li className="font-semibold text-2xl">Category of Complaint</li>
                    </ul>
                    <ul className="flex flex-col gap-4 text-center p-4 bg-gradient-to-r from-red-200 to-red-50 ">
                        <li className="border-solid border-1 border-gray-600 font-medium text-lg">Water related Complaint</li>
                        <hr/>
                        <li className="border-solid border-1 border-gray-600 font-medium text-lg">Electricty related Complaint</li>
                        <hr/>
                        <li className="border-solid border-1 border-gray-600 font-medium text-lg">Road related Complaint</li>
                        <hr/>
                        <li className="border-solid border-1 border-gray-600 font-medium text-lg">Drainage related Complaint</li>
                        <hr/>
                        <li className="border-solid border-1 border-gray-600 font-medium text-lg">Garbage related Complaint</li>
                    </ul>
                </div>

                <div className="ml-2 mt-4 bg-gradient-to-r from-red-200 to-red-50 w-3/4 rounded-xl ">
                
                    <div className="p-2 bg-gradient-to-r from-red-900 to-red-800 w-full text-center border-solid border-4 border-gray-600">
                        <p className="font-semibold text-5xl text-white">Complaint Management System</p>
                    </div>

                    {/* Guidlelines */}
                    <div className="ml-4 mt-4 ">
                        <p className="text-2xl font-bold underline">Guidelines:</p>
                        <ul className="list-disc ml-6 mt-4 flex flex-col gap-2 font-sans">
                            <li className="text-lg">Inorder to <span className="font-semibold">Register</span> your complaint you need to fill the form below</li>
                            <li className="text-lg">You can track your complaints progress by using the <span className="font-semibold">Complaint Number</span></li>
                            <li className="text-lg">Minimum <span className="font-semibold">48</span> hours is needed for any complaint to be addressed</li>
                            <li className="text-lg">You can call Toll-Free <span className="underline text-rose-500 font-semibold hover:cursor-pointer">1800 345 3375</span> number for additional support</li>
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="w-full flex justify-center gap-20 mt-8 mb-4">
                        <Link to="/form">
                            <button class="bg-transparent hover:bg-cyan-400 text-cyan-500 font-bold hover:text-white py-2 px-4 border-2 border-cyan-500 hover:border-transparent rounded-xl btn-lg">
                                Apply for Compalint →
                            </button>
                        </Link>
                        <Link to="/track">
                            <button class="bg-transparent hover:bg-red-500 text-red-500 font-bold hover:text-white py-2 px-4 border-2 border-red-500 hover:border-transparent rounded-xl btn-lg">
                                Track your Complaint →
                            </button>
                        </Link>
                    </div>
                    <div className="w-full flex justify-end" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                        <div className="flex gap-2">
                            <div className="flex flex-col justify-center mr-2">
                                <FaStarOfLife className="text-red-900 text-sm"/>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-lg mr-4 font-bold text-red-700"> Had your complaint Resolved / Cancelled ? </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center text-3xl text-primary">
                            <FaArrowRight />
                        </div>
                        <button className="btn btn-link font-bold text-xl">
                            Submit Feedback
                        </button>
                    </div>

                    {/* Modal for feedback submission */}
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="w-full text-center">
                                <h3 className="font-bold text-4xl">Your Feedback is Important!</h3>
                                <div className="mt-6">
                                    <p className="text-3xl font-bold bg-gray-300 p-2 rounded-lg">Submit your Feedback</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 m-4 p-6 pl-10">
                                <div>
                                    <label className="text-2xl font-semibold pr-2 mr-20"> Enter Your Name : </label>
                                    <input type="text" placeholder="Type here..." className="border border-teal-600 rounded-md px-3 py-2 transition duration-300 ease" onChange={(event) => setName(event.target.value)}/>
                                </div>
                                <div>
                                    <label className="text-2xl font-semibold mr-6"> Enter the Complaint ID : </label>
                                    <input type="text" placeholder="Type here..." className="border border-teal-600 rounded-md px-3 py-2 transition duration-300 ease" onChange={(event) => setID(event.target.value)}/>
                                </div>
                                <div>
                                    <label className="text-2xl font-semibold mr-2"> Select type of Compalint : </label>
                                    <select className="select select-success" defaultValue="A" onChange={(event) => setCategory(event.target.value)} required>
                                        <option value="A">Select Category of complaint</option>
                                        <option value="electricity">Electricity related Complaint</option>
                                        <option value="water">Water related complaint</option>
                                        <option value="road">Road related complaint</option>
                                        <option value="garbage">Garbage  related complaint</option>
                                        <option value="drainage">Drainage  related complaint</option>
                                    </select>
                                </div>
                                <div className="flex flex-row">
                                    <div>
                                        <label className="text-2xl font-semibold mr-2">Enter Your Feedback here : </label>
                                    </div>
                                    <textarea id="w3review" placeholder="Enter your Feedback here..." className="border border-teal-600 rounded-md px-3 py-2 transition duration-300 ease" rows="4" cols="50" onChange={(event) => setFeedback(event.target.value)}></textarea>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-active bg-green-600 hover:bg-green-300 text-white mt-4 font-bold py-2 px-4 border border-green-700 rounded-xl text-xl" onClick={submit}>Submit</button>
                                </div>

                            </div>
                        </div>
                    </dialog>

                </div>

            </div>
        </>
    );
}

export default Main;