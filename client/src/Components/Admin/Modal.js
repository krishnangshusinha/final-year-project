import React, { useEffect, useState } from "react";
import axios from "axios";


const Modal = ({id, time, desc, uid, mobile, area, pincode, district, status}) => {
    const [t, setTime] = useState(time);
    const [d, setDesc] = useState(desc);
    const [ui, setID] = useState(uid);
    const [m, setMobile] = useState(mobile);
    const [a, setArea] = useState(area);
    const [p, setPincode] = useState(pincode);
    const [di, setDistrict] = useState(district);
    const [s, setStatus] = useState(status);

    const deleteComplaint = async (id) => {
            
            try{
                const {data} = await axios.delete(`https://final-year-project-9p1g.onrender.com/admin/delete/electricity/installs/${id}`)
    
                if( data?.success ){
                    window.location.reload();
                }
            }
            catch(error){
    
            }
    
    }

    const update = () => {
        // setTime();
        // setDesc();
        // setID();
        // setMobile();
        // setArea();
        // setPincode();
        // setDistrict();
        // setStatus();
        
        console.log(time)
        console.log(desc)
        console.log(id)
        console.log(mobile)
        console.log(area)
        console.log(pincode)
        console.log(district)
        
    }

    return(
        <>
            {/* <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => ( update(), document.getElementById('my_modal_1').showModal() )}> View Request </button> */}
            
            <dialog id="my_modal_1" className="modal">
                
                <div className="modal-box">
                    
                    <button className="btn btn-sm btn-circle btn-ghost text-lg text-black absolute right-2 top-2" onClick={()=> ( update() , document.getElementById('my_modal_1').close()) }>✕</button>
                    
                    <div className="w-full text-center">
                        <h3 className="font-bold text-4xl text-black">View Request</h3>
                    </div>
                    <div class="md:flex md:items-center mt-10 mb-6 text-black ml-4">
                        <div class="md:w-1/3">
                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                Date of Complaint :- 
                            </label>
                        </div>
                        <div class="md:w-3/4">
                            <p className="text-gray-800 text-xl font-bold"> {time} </p>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                        <div class="md:w-1/3">
                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                Complaint Description:- 
                            </label>    
                        </div>
                        <div class="md:w-3/4">
                            <p className="text-gray-800 text-xl font-bold"> {desc ? desc : "_"} </p>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                        <div class="md:w-1/3">
                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                Adhar Number:- 
                            </label>    
                        </div>
                        <div class="md:w-3/4">
                            <p className="text-gray-800 text-xl font-bold"> {uid ? uid : "_"} </p>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                        <div class="md:w-1/3">
                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                Mobile Number:- 
                            </label>    
                        </div>
                        <div class="md:w-3/4">
                            <p className="text-gray-800 text-xl font-bold"> {mobile} </p>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                        <div class="md:w-1/3">
                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                Address:- 
                            </label>    
                        </div>
                        <div class="md:w-3/4">
                            <p className="text-gray-800 text-xl font-bold"> {area} , {pincode} , {district} </p>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                        <div class="md:w-1/3">
                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                Current Status:- 
                            </label>    
                        </div>
                        <div class="md:w-3/4">
                            <p className="text-red-500 text-xl font-bold"> {status} </p>
                        </div>
                    </div>
                    
                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                        <div class="md:w-1/3">
                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                Update Status:- 
                            </label>    
                        </div>
                        <div class="md:w-3/4">
                            <select className="select select-info w-full max-w-xs text-xl">
                                <option disabled selected>Select New Status</option>
                                <option>Pending</option>
                                <option>Under Review</option>
                                <option>Initiated</option>
                                <option>In Progress</option>
                                <option>On Hold</option>
                                <option>Cancelled</option>
                                <option>Resolved</option>
                            </select>
                        </div>
                    </div>
                    
                    
                    <div className="w-full">
                        <form method="dialog">
                            <div className="flex justify-center gap-8">
                                <button className="btn text-white text-lg bg-red-400 mt-6" onClick={() => deleteComplaint(id)}>Reject Complaint</button>
                                <button className="btn text-white text-lg bg-blue-600 mt-6">Forward Technician</button>
                            </div>
                        </form>
                    </div>
                </div>

            </dialog>
                                    
            
        </>
    );

}

export default Modal;