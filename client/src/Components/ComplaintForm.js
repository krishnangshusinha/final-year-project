import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from 'axios'
import check from "../images/check.png";

const ComplaintForm = () => {

    const[category , setCategory] = useState();
    const[install_or_repair , setInstallOrRepair] = useState();
    const[description , setDescription] = useState();
    const[user_id , setUserID] = useState();
    const[name, setName] = useState();
    const[mobileNumber, setMobile] = useState();
    const[area, setArea] = useState();
    const[pincode, setPincode] = useState();
    const[district , setDistrict] = useState();
    const[visible , setVisible] = useState(false);
    const[complaintID , setComplaintID] = useState();
    const[modal , setModal] = useState();
    
    // for making repair/installation dropdown visible
    const call = async (event) => {
        
        const cat = await event.target.value;

        setCategory(cat);
        
        if(cat === "electricity"){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
 
    }

    
    // on submitting the value
    const submit = async () => {

        try{

            if( !category || !user_id || !mobileNumber || !area || !pincode || !district ){
                alert("Fill all required feilds");
            }
            else if( isNaN(user_id) || isNaN(mobileNumber) || isNaN(pincode) ){
                alert("Adhar Number, Mobile Number, and Pincode should be a valid number");
            }
            else if(category === "electricity"){
                
                if( install_or_repair === "I" ){
                    // add to install schema
                    const {data} = await axios.post("http://localhost:3001/electricity/install", {user_id , description , name , mobileNumber, area, pincode, district});

                    if( data?.success ){
                        console.log(data.unique._id);
                        setComplaintID(data.unique._id);
                        document.getElementById('my_modal_1').showModal()
                    }
                }
                else if( install_or_repair === "R" ){
                    // add to repair schema
                    const {data} = await axios.post("http://localhost:3001/electricity/repair", {user_id , description , name , mobileNumber, area, pincode, district});

                    if( data?.success ){
                        console.log(data.unique._id);
                        setComplaintID(data.unique._id);
                        document.getElementById('my_modal_1').showModal()
                    }
                }

            }
            else if(category === "water"){
                
                if( install_or_repair === "I" ){
                    // add to install schema
                    const {data} = await axios.post("http://localhost:3001/water/install", {user_id , description , name , mobileNumber, area, pincode, district});

                    if( data?.success ){
                        console.log(data.unique._id);
                        setComplaintID(data.unique._id);
                        document.getElementById('my_modal_1').showModal()
                    }
                }
                else if( install_or_repair === "R" ){
                    // add to repair schema
                    const {data} = await axios.post("http://localhost:3001/water/repair", {user_id , description , name , mobileNumber, area, pincode, district});

                    if( data?.success ){
                        console.log(data.unique._id);
                        setComplaintID(data.unique._id);
                        document.getElementById('my_modal_1').showModal()
                    }
                }

            }
            else if(category === "road"){
                if( install_or_repair === "I" ){
                    // add to install schema
                    const {data} = await axios.post("http://localhost:3001/road/install", {user_id , description , name , mobileNumber, area, pincode, district});

                    if( data?.success ){
                        console.log(data.unique._id);
                        setComplaintID(data.unique._id);
                        document.getElementById('my_modal_1').showModal()
                    }
                }
                else if( install_or_repair === "R" ){
                    // add to repair schema
                    const {data} = await axios.post("http://localhost:3001/road/repair", {user_id , description , name , mobileNumber, area, pincode, district});

                    if( data?.success ){
                        console.log(data.unique._id);
                        setComplaintID(data.unique._id);
                        document.getElementById('my_modal_1').showModal()
                    }
                }
            }
            else if(category === "drainage"){
                if( install_or_repair === "I" ){
                    // add to install schema
                    const {data} = await axios.post("http://localhost:3001/drainage/install", {user_id , description , name , mobileNumber, area, pincode, district});

                    if( data?.success ){
                        console.log(data.unique._id);
                        setComplaintID(data.unique._id);
                        document.getElementById('my_modal_1').showModal()
                    }
                }
                else if( install_or_repair === "R" ){
                    // add to repair schema
                    const {data} = await axios.post("http://localhost:3001/drainage/repair", {user_id , description , name , mobileNumber, area, pincode, district});

                    if( data?.success ){
                        console.log(data.unique._id);
                        setComplaintID(data.unique._id);
                        document.getElementById('my_modal_1').showModal()
                    }
                }
            }
            else if(category === "garbage"){
                if( install_or_repair === "I" ){
                    // add to install schema
                    const {data} = await axios.post("http://localhost:3001/garbage/install", {user_id , description , name , mobileNumber, area, pincode, district});

                    if( data?.success ){
                        console.log(data.unique._id);
                        setComplaintID(data.unique._id);
                        document.getElementById('my_modal_1').showModal()
                    }
                }
                else if( install_or_repair === "R" ){
                    // add to repair schema
                    const {data} = await axios.post("http://localhost:3001/garbage/repair", {user_id , description , name , mobileNumber, area, pincode, district});

                    if( data?.success ){
                        console.log(data.unique._id);
                        setComplaintID(data.unique._id);
                        document.getElementById('my_modal_1').showModal()
                    }
                }
            }

        }
        catch(error){
            console.log(error);
        }

    }
    

    return(
        <>
            <div className="h-full w-full bg-gradient-to-tl from-red-400 to-gray-300 p-8">
                <Link to="/"><div ><MdHome className="text-3xl border-2 border-blue-950 rounded-xl"/></div></Link>
                <div className="text-4xl font-bold  w-full text-center p-4 text-gray-900">Jadavpur University Complaint Management System</div>
                <div className="text-2xl font-bold w-full text-center p-2 bg-white rounded-xl">Register your complaint</div>
                <div className="bg-white rounded-xl mt-4 flex flex-col gap-4 p-4">
                    <div className="w-full text-center text-2xl font-semibold underline mb-4">Complaint Form</div>
                    <div className="text-red-500 mt-2 w-full text-center">Instructions :Fields marked with red (*) are compulsory.</div>
                    
                    {/* Complaint Description */}
                    <div>
                        <div className="bg-slate-300 w-full text-center rounded-xl p-1 font-medium">Complaint Description</div>
                        
                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">Complaint Category <span className="text-red-500">*</span></p>
                            <div className="w-1/2 text-center">
                                <select className="select select-success w-full cover-full max-w-xlg mt-2 ml-20" onChange={ (event) =>  call(event)  } defaultValue="A" required>
                                    <option value="A">Select Category for complaint</option>
                                    <option value="electricity">Electricity related Complaint</option>
                                    <option value="water">Water related complaint</option>
                                    <option value="road">Road related complaint</option>
                                    <option value="garbage">Garbage  related complaint</option>
                                    <option value="drainage">Drainage  related complaint</option>
                                    
                                </select>
                            </div>
                        </div>
                            
                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">New Installation/Repair <span className="text-red-500">*</span></p>
                            <div className="w-1/2 text-center">
                                <select className="select select-success w-full cover-full max-w-xlg mt-2 ml-14" onChange={ (event) =>  setInstallOrRepair(event.target.value)  } defaultValue="A">
                                    <option value="A">Select Category for complaint</option>
                                    <option value="I">New Installation Request</option>
                                    <option value="R">Repair Request</option>
                                        
                                </select>
                            </div>
                        </div>
                        
                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">Complaint Description</p>
                            <div class="w-1/2">
                                <input class="w-full max-w-xlg bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-teal-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500  shadow-sm focus:shadow ml-20" onChange={ (event) =>  setDescription(event.target.value)  } placeholder="Type here..."/>
                            </div>
                        </div>
                    </div>

                    {/* User Details */}
                    <div>
                        <div className="bg-slate-300 w-full text-center rounded-xl p-1 font-medium">User Details</div>
                        
                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">Adhar Number<span className="text-red-500">*</span></p>
                            <div class="w-full max-w-sm min-w-[200px] mt-2 ml-9">
                                <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" onChange={ (event) =>  setUserID(event.target.value)  } placeholder="Type here..." required/>
                            </div>

                        </div>

                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">Full Name of Person</p>
                            <div class="w-full max-w-sm min-w-[200px] mt-2">
                                <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" onChange={ (event) =>  setName(event.target.value)  } placeholder="Type here..."/>
                            </div>
                        </div>

                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">Mobile Number<span className="text-red-500">*</span></p>
                            <div class="w-full max-w-sm min-w-[200px] mt-2 ml-8">
                                <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" onChange={ (event) =>  setMobile(event.target.value)  } placeholder="Type here..." required/>
                            </div>
                        </div>

                
                    </div>

                    {/* Address */}
                    <div>
                        <div className="bg-slate-300 w-full text-center rounded-xl p-1 font-medium">Address of Complaint</div>
                        
                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">House Number</p>
                            <div class="w-full max-w-sm min-w-[200px] mt-2 ml-9">
                                <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..."/>
                            </div>

                        </div>

                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">Area/Sector/Colony<span className="text-red-500">*</span></p>
                            <div class="w-full max-w-sm min-w-[200px] mt-2">
                                <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" onChange={ (event) =>  setArea(event.target.value)  } placeholder="Type here..." required/>
                            </div>
                        </div>

                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">Pincode<span className="text-red-500">*</span></p>
                            <div class="w-full max-w-sm min-w-[200px] mt-2 ml-20">
                                <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" onChange={ (event) =>  setPincode(event.target.value)  } placeholder="Type here..." required/>
                            </div>
                        </div>

                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mr-3 mt-4">Campus<span className="text-red-500">*</span></p>
                            <div className="w-1/3">
                                <select className="select select-success w-full cover-full max-w-md mt-2 ml-20" onChange={ (event) =>  setDistrict(event.target.value)  } required>
                                    <option disabled selected>Select the Campus</option>
                                    <option value="main">Jadavpur University Main campus, Jadavpur</option>
                                    <option value="saltlake">Jadavpur University Saltlake campus, Chingrighata</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    {/* Documents of Complaint */}
                    <div>
                        <div className="bg-slate-300 w-full text-center rounded-xl p-1 font-medium">Documents</div>
                        
                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">Upload Documents related to Complaint if any <span className="font-normal">(size upto 1MB)</span></p>
                            <div class="w-full max-w-sm min-w-[200px] mt-2 ml-9">
                                <input type="file" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..."/>
                                <div className="text-red-500 mt-2">* File Should be .gif, .jpg, .jpeg, .png, .pdf only </div>
                            </div>

                        </div>

                        

                    </div>
                    
                    <hr/>

                    <div className="w-full text-center">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-blue-500 hover:bg-blue-700 text-white mt-4 font-bold py-2 px-4 border border-blue-700 rounded-xl text-xl " onClick={()=> ( submit() ) }>Submit</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className="w-full flex justify-center p-4">
                                    <img src={check} class="h-15 w-12 text-center"/>
                                </div>
                                <h3 className="font-bold text-2xl mb-4 mt-4">Your Complaint is Registered!</h3>
                                <p className="py-4">Your Complaint is Successfully Registered.<br/> Please Note the <span className="font-semibold">Complaint ID</span> to Track the Progress of your Registered Complaint</p>
                                <div className="font-semibold text-xl">
                                    <p>Complaint ID : <span className="font-bold text-red-500">{complaintID}</span></p>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-200">✕</button>
                                        <Link to="/">
                                            <button className="btn">Close</button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComplaintForm;