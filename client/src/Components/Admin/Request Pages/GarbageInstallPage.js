import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";
import axios from "axios";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { BsSend, BsWhatsapp } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";


const GarbageInstallPage = () => {
    const[complaints , setComplaints] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    
    const [time, setTime] = useState();
    const [desc, setDesc] = useState();
    const [uid, setUID] = useState();
    const [mobile, setMobile] = useState();
    const [area, setArea] = useState();
    const [pincode, setPincode] = useState();
    const [district, setDistrict] = useState();
    const [status, setStatus] = useState();
    const [id, setID] = useState();

    const [globalStatus , setGlobalStatus] = useState("");
    const [uniqueID , setUniqueID] = useState();

    const[phone , setPhone] = useState();
    const[msg , setMsg] = useState();

    

    useEffect(() => {

        // first fetching all the Road Install requests
        const fetchInstallRequests = async () => {
            
            try{
                const {data} = await axios.get("https://final-year-project-9p1g.onrender.com/admin/garbage/installs");
                
                if(data?.success){
                    setComplaints(data?.complaints);
                }
            }
            catch(error){
                console.log(error);
                alert("Error in getting Road Install requests");
            }

        }
        
        fetchInstallRequests();
        setGlobalStatus("");

        
    }, [])

    // handles deleting non valid complaint
    const deleteComplaint = async (id) => {
                
        try{
            const {data} = await axios.delete(`https://final-year-project-9p1g.onrender.com/admin/delete/garbage/installs/${id}`)

            if( data?.success ){
                window.location.reload();
            }
        }
        catch(error){

        }
        
    }
    
    // handles status update for a complaint
    const handleStatus = async (id , status) => {
        try {
            const {data} = await axios.put(`https://final-year-project-9p1g.onrender.com/admin/garbage/install/${id}/${status}`)

            if( data?.success ){
                window.location.reload();
            }
        }
        catch (error) {
            
        }
    }
    
    let indexOfFirstItem = (currentPage-1)*10;
    let indexOfLastItem = indexOfFirstItem + 10;
    
    // list of items for current page
    let currentItems = complaints.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const assignComplaint = async (id, unique, phone)=> {
        try{
            const {data} = await axios.put(`https://final-year-project-9p1g.onrender.com/workers/assign/${phone}/${unique}`);

            if( data?.success ){
                console.log(data?.element)
            }
            
        }
        catch(error){

        }
    }

    // Send msg to whatsapp
    const sendWhatsapp = (id, unique) => {

        localStorage.setItem(id , phone);
        
        let status = "Initiated"
        handleStatus(id , status);
        
        const phn = phone.substr(3,10);
        assignComplaint(id, unique, phn);
        let link = "http://localhost:3000/workersLogin";
        let url = "https://wa.me/" + phone + "?text=" + "*New Complaint :*  " + msg + "%0a" + "*Complaint ID:*  " + uniqueID + "%0a" + "*Address :*  "+ area + " , " + district + " - " + pincode + "%0a%0a" + "*_For further details visit the link_* -->  " + link + "%0a%0a" + "*_Incase of any Updates reply with the Same, Keep updated with the Progress_*";
        
        window.open(url , '');
        
        
        window.location.reload();
    
    }

    // check for updates
    const checkUpdate = (id, unique) => {
    
        let ph = localStorage.getItem(id);
        
        let url = "https://wa.me/" + ph + "?text=" + "_Please Update on the Progess of the Complaint with ID_ " + "*" + unique + "*";
        
        window.open(url , '');

        let status = "In Progress"
        handleStatus(id , status);
        
        window.location.reload();
        
    }

    // track for updates
    const trackProgress = (id, unique) => {
        let ph = localStorage.getItem(id);
        
        let url = "https://wa.me/" + ph + "?text=" + "*_Update on Complaint_*  " + "*" + unique + "*";
        
        window.open(url , '');
    }

    return (

        <>
            <AdminLayout/>
            <div class="p-4 sm:ml-64 bg-blue-50">
                <div class="p-4 rounded-lg  dark:border-gray-700 mt-14">

                    <div className="pr-4 pt-4 pb-4 flex flex-col gap-2 font-bold mb-6">
                        <p className="text-4xl">Garbage Installation Request Complaints</p>
                    </div>
                    
                    
                    {/* The Table of all Components */}
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                            <div>
                                <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                    <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                    </svg>
                                    Last 30 days
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div id="dropdownRadio" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden data-popper-escaped data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: 0, transform: 'translate3d(522.5px, 3847.5px, 0px)'}}>
                                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input id="filter-radio-example-1" type="radio" defaultValue name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input defaultChecked id="filter-radio-example-2" type="radio" defaultValue name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input id="filter-radio-example-3" type="radio" defaultValue name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="filter-radio-example-3" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input id="filter-radio-example-4" type="radio" defaultValue name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="filter-radio-example-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input id="filter-radio-example-5" type="radio" defaultValue name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="filter-radio-example-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Sort on basis of Complaint Status */}
                            <div className="flex flex-row gap-8 p-2  bg-gray-300  rounded-xl">
                                <p className="text-lg font-bold p-2"> Sort by Complaint Status : </p>
                                <button className="btn text-xl bg-slate-800 font-bold text-white hover:text-black" onClick={() => setGlobalStatus("Pending")}>Pending</button>
                                <button className="btn text-xl bg-slate-800 font-bold text-white hover:text-black" onClick={() => setGlobalStatus("Under Review")}>Under Review</button>
                                <button className="btn text-xl bg-slate-800 font-bold text-white hover:text-black" onClick={() => setGlobalStatus("Initiated")}>Initiated</button>
                                <button className="btn text-xl bg-slate-800 font-bold text-white hover:text-black" onClick={() => setGlobalStatus("In Progress")}>In Progress</button>
                                <button className="btn text-xl bg-slate-800 font-bold text-white hover:text-black" onClick={() => setGlobalStatus("Resolved")}>Resolved</button>
                                <button className="btn btn-outline rounded-full text-4xl font-bold" onClick={() => setGlobalStatus("")}><IoMdRefresh /></button>
                            </div>

                            
                        </div>

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                Date of Complaint
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Complaint ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Adhar Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Mobile Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>

                            {/* The modal for viewing the complaint */}                            
                            <dialog id="my_modal_1" className="modal">
                
                                <div className="modal-box w-11/12 max-w-5xl">
                                    
                                    <button className="btn btn-sm btn-circle btn-ghost text-lg text-white absolute right-2 top-2 bg-gray-700" onClick={()=> ( document.getElementById('my_modal_1').close()) }>✕</button>
                                    
                                    <div className="w-full text-center">
                                        <h3 className="font-bold text-4xl text-black bg-blue-200 p-2 rounded-xl">View Request </h3>
                                    </div>
                                    <div class="md:flex md:items-center mt-10 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 p-2 mr-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                                Complaint ID:- 
                                            </label>
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {uniqueID} </p>
                                        </div>
                                    </div>
                                    <div class="md:flex md:items-center mt-10 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 p-2 mr-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                                Date of Complaint :- 
                                            </label>
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {time} </p>
                                        </div>
                                    </div>
                                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 p-2 mr-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                                Complaint Description:- 
                                            </label>    
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {desc ? desc : "_"} </p>
                                        </div>
                                    </div>
                                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 p-2 mr-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                                Adhar Number:- 
                                            </label>    
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {uid ? uid : "_"} </p>
                                        </div>
                                    </div>
                                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 p-2 mr-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                                Mobile Number:- 
                                            </label>    
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {mobile} </p>
                                        </div>
                                    </div>
                                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 p-2 mr-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                                Address:- 
                                            </label>    
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {area} , {pincode} , {district} </p>
                                        </div>
                                    </div>
                                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 p-2 mr-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                                Current Status:- 
                                            </label>    
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-red-500 text-xl font-bold"> {status} </p>
                                        </div>
                                    </div>
                                    
                                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 p-2 mr-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                                Update Status:- 
                                            </label>    
                                        </div>
                                        <div class="md:w-3/4">
                                            <select className="select select-info w-full max-w-xs text-xl" onChange={(event) => (handleStatus(id ,event.target.value))}>
                                                <option disabled selected>Select New Status</option>
                                                <option>Pending</option>
                                                <option>Under Review</option>
                                                <option>Initiated</option>
                                                <option>In Progress</option>
                                                <option>Cancelled</option>
                                                <option>Resolved</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="w-full">
                                        <form method="dialog">
                                            <div className="flex justify-center gap-8">
                                                <button className="btn text-white text-lg bg-red-400 mt-6" onClick={() => deleteComplaint(id)}>Reject Complaint</button>
                                                { ( (status === "Pending") || (status === "Under Review") ) ? <button className="btn btn-info text-white text-lg mt-6" onClick={()=> (document.getElementById('my_modal_2').showModal())}> Forward Technician </button> : ( ((status === "Initiated")) ? <button className="btn btn-success text-white text-lg mt-6" onClick={()=> (checkUpdate(id, uniqueID))}> Check for Updates </button> : <button className="btn btn-warning text-white text-lg mt-6" onClick={()=> (trackProgress(id, uniqueID))}> Track Progess </button> ) }

                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </dialog>
                            
                            {/* The modal for forwarding the complaint to technician */}
                            <dialog id="my_modal_2" className="modal">
                
                                <div className="modal-box w-11/12 max-w-5xl">
                                    
                                    <button className="btn btn-sm btn-circle btn-ghost text-lg text-black absolute right-2 top-2" onClick={()=> ( document.getElementById('my_modal_2').close()) }>✕</button>
                                    
                                    <div className="w-full text-center">
                                        <h3 className="font-bold text-4xl text-black">View Request</h3>
                                    </div>
                                    <div class="md:flex md:items-center mt-10 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 m-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 p-4 text-2xl" for="inline-full-name">
                                                Date of Complaint :- 
                                            </label>
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {time} </p>
                                        </div>
                                    </div>
                                    <div class="md:flex md:items-center mt-10 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 m-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 p-4 text-2xl" for="inline-full-name">
                                                Complaint ID  :- 
                                            </label>
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {uniqueID} </p>
                                        </div>
                                    </div>
                                    <div class="md:flex md:items-center mt-10 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 m-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 pl-1 text-2xl" for="inline-full-name">
                                                Address of Complaint :- 
                                            </label>
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {area} , {district} , {pincode} </p>
                                        </div>
                                    </div>
                                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                                        <div class="md:w-1/3 bg-gray-200 m-2 rounded-xl">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 p-4 text-2xl" for="inline-full-name">
                                                Choose Technician :- 
                                            </label>    
                                        </div>
                                        <div class="md:w-3/4">
                                            <select className="select select-info border-2 border-green-500 w-full max-w-xl text-xl" onChange={(event) => ( setPhone(event.target.value) )}>
                                                <option disabled selected>Select Technician</option>
                                                <option value="+911234567889">Technician E</option>
                                                <option value="+911234567888">Technician F</option>
                                                <option value="+911234567887">Technician G</option>
                                                <option value="+911234567886">Technician H</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="md:flex md:items-center mt-10 mb-6 text-black ml-4">
                                        <div class="md:w-1/3">
                                            <label class="text-gray-800 font-bold bg-gray-200 m-2 p-4 mb-1 md:mb-0 pr-4 rounded-xl text-2xl" for="inline-full-name">
                                                Add the Complaint :- 
                                            </label>
                                        </div>
                                        <div class="md:w-3/4">
                                            <input type="text" className="border-2 ml-2 border-green-500 px-5 py-2 w-5/6 text-xl rounded-xl" placeholder="Write your text here..." onChange={(event) => setMsg(event.target.value)}/>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="w-full">
                                        <form method="dialog">
                                            <div className="flex justify-center gap-8">
                                                <button className="btn text-white text-lg mt-6 bg-green-500" onClick={() => sendWhatsapp(id, uniqueID)} > Forward Technician </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </dialog>
                            
                            
                            {currentItems?.map((c) => (
                                
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" onClick={()=> (setUniqueID(c.uniqueID),setID(c._id), setStatus(c.status) ,setDistrict(c.district),setPincode(c.pincode) ,setMobile(c.mobileNumber) ,setUID(c.user_id) ,setDesc(c.description), setArea(c.area) , setTime(c.createdAt.substring(0, 10)))}>
                                {( (globalStatus === "") && (c.status !== "Resolved" && c.status !== "Cancelled")) ? 
                                
                                    <>
                                    <td className="px-6 py-4">
                                    {c.createdAt.substring(0, 10)}
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {c.uniqueID}
                                    </td>
                                    <td className="px-6 py-4">
                                    {c.user_id ? c.user_id : "_"}
                                    </td>
                                    <td className="px-6 py-4">
                                    {c.mobileNumber}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {c.area} , {c.pincode} , {c.district}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <select className="select select-info max-w-xs text-md  text-black" onChange={(event)=> ( handleStatus(c._id ,event.target.value))}>
                                        <option disabled selected>{c.status}</option>
                                        <option>Pending</option>
                                        <option>Under Review</option>
                                        <option>Initiated</option>
                                        <option>In Progress</option>
                                        <option>Cancelled</option>
                                        <option>Resolved</option>
                                    </select>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Modal for Viewing the request */}
                                        <div className="w-full flex gap-2">
                                            <button className="btn btn-error" onClick={() => deleteComplaint(c._id)}> <MdOutlineDeleteForever className="text-3xl text-white" /> </button>
                                            { ( (c.status === "Pending") || (c.status === "Under Review") ) ? <button className="btn btn-info text-white text-lg" onClick={()=> (document.getElementById('my_modal_2').showModal())}> Forward <IoCaretForwardCircleOutline className="text-2xl"/> </button> : ( ((c.status === "Initiated")) ? <button className="btn btn-success text-white text-lg" onClick={()=> (checkUpdate(c._id, c.uniqueID))}> Check for Updates </button> : <button className="btn btn-warning text-white text-lg" onClick={()=> (trackProgress(c._id, c.uniqueID))}> Track Progess </button> ) }
                                            <button className="btn btn-outline text-white text-lg" onClick={()=> (document.getElementById('my_modal_1').showModal())}> <FaEye /> </button>
                                        </div>
                                    </td>
                                    </>

                                : 
                                    <>
                                    { (globalStatus === c.status) ? 
                                    <>
                                    
                                    <td className="px-6 py-4">
                                    {c.createdAt.substring(0, 10)}
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {c.uniqueID}
                                    </td>
                                    <td className="px-6 py-4">
                                    {c.user_id ? c.user_id : "_"}
                                    </td>
                                    <td className="px-6 py-4">
                                    {c.mobileNumber}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {c.area} , {c.pincode} , {c.district}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <select className="select select-info max-w-xs text-md  text-black" onChange={(event)=> ( handleStatus(c._id ,event.target.value))}>
                                        <option disabled selected>{c.status}</option>
                                        <option>Pending</option>
                                        <option>Under Review</option>
                                        <option>Initiated</option>
                                        <option>In Progress</option>
                                        <option>Cancelled</option>
                                        <option>Resolved</option>
                                    </select>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Modal for Viewing the request */}
                                        <div className="w-full flex gap-2">
                                            <button className="btn btn-error" onClick={() => deleteComplaint(c._id)}> <MdOutlineDeleteForever className="text-3xl text-white" /> </button>
                                            { ( (c.status === "Pending") || (c.status === "Under Review") ) ? <button className="btn btn-info text-white text-lg" onClick={()=> (document.getElementById('my_modal_2').showModal())}> Forward <IoCaretForwardCircleOutline className="text-2xl"/> </button> : ( ((c.status === "Initiated")) ? <button className="btn btn-success text-white text-lg" onClick={()=> (checkUpdate(c._id, c.uniqueID))}> Check for Updates </button> : ( (c.status !== "Resolved") ? <button className="btn btn-warning text-white text-lg" onClick={()=> (trackProgress(c._id , c.uniqueID))}> Track Progess </button> : null ) ) }
                                            <button className="btn btn-outline text-white text-lg" onClick={()=> (document.getElementById('my_modal_1').showModal())}> <FaEye /> </button>
                                        </div>
                                    </td>
                                    </> 
                                    : null}
                                    </>
                                    
                                }
                                </tr>
                                 

                            ))}
                            
                            </tbody>
                        </table>

                        {/* pagination  */}
                        <div className="flex justify-center my-8">
                        {
                            Array.from({ length: Math.ceil(complaints.length / itemsPerPage),}).map((_ , index) => (
                            
                            <button key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`mx-2 px-2 py-1 rounded-full font-medium ${ currentPage === index + 1 ? "text-white dark:bg-blue-900" : "bg-gray-200 text-blue" }`}                
                            >
                                {index + 1}
                            </button>
                            
                            ))
                        }
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </>
    
    );
}

export default GarbageInstallPage;