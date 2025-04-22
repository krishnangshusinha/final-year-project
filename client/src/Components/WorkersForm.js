import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import account2 from "../images/account2.png";
import { useWorker } from "../context/useWorker";
import axios from "axios";
import { MdFiberNew } from "react-icons/md";
import { BsExclamationTriangle } from "react-icons/bs";


const WorkersForm = () => {

    const [worker , setWorker] = useWorker();
        
    const [type, setType] = useState();
    const [unique, setUnique] = useState();
    const [desc, setDesc] = useState();
    const [area, setArea] = useState();
    const [pincode, setPincode] = useState();
    const [district, setDistrict] = useState();
    const [time , setTime] = useState();
    const [msg , setMsg] = useState();
    
    useEffect(() => {
        
        const fetchComplaintDetails = async (unique) => {
            try {
                const {data} = await axios.get(`http://localhost:3001/admin/${unique}`);
                
                if( data?.success ){
                    setType(data?.type);
                    setUnique(unique);
                    setDesc(data?.description);
                    setArea(data?.area);
                    setPincode(data?.pincode);
                    setDistrict(data?.district);

                    const d = new Date(data?.time.substring(0,10));
                    d.setDate(d.getDate() + 14); 
                    setTime(d.toDateString());
                }
                else{
                    console.log("error");
                }
            } 
            catch (error) {
                console.log(error);
            }

            
        }


        let unique = localStorage.getItem("newComplaint");
        if( unique ){
            fetchComplaintDetails(unique);
        }


    },[])

    // forward problem to admin
    const sendAdmin = async (msg) => {

        try {
            const from = worker.user;
            let dept , to;
            const markasread = 0;

            if( from === "Technician A" || from === "Technician B" || from === "Technician C" || from === "Technician D"){
                dept = "Electricity";
                to = "electric";
            }
            else if(from === "Technician W" || from === "Technician X" || from === "Technician Y" || from === "Technician Z" ){
                dept = "Water";
                to = "water"
            }
            else if(from === "Technician P" || from === "Technician Q" || from === "Technician R" || from === "Technician S" ){
                dept = "Road";
                to = "road"
            }
            else if(from === "Technician I" || from === "Technician J" || from === "Technician K" || from === "Technician L" ){
                dept = "Drainage";
                to = "drainage"
            }
            else if(from === "Technician E" || from === "Technician F" || from === "Technician G" || from === "Technician H" ){
                dept = "Garbage";
                to = "garbage"
            }

            const {data} = await axios.post("http://localhost:3001/message", {msg , to , from , markasread, dept });

            if( data?.success ){
                alert("Forwaded to the Admin")
            }
                
        } 
        catch (error) {
            
        }

    }

    // successfull completion of complaint
    const forwardResolved = async () => {
        try {
            const from = worker.user;
            let dept , to;
            const markasread = 0;

            if( from === "Technician A" || from === "Technician B" || from === "Technician C" || from === "Technician D"){
                dept = "Electricity";
                to = "electric";
            }
            else if(from === "Technician W" || from === "Technician X" || from === "Technician Y" || from === "Technician Z" ){
                dept = "Water";
                to = "water"
            }

            const msg = "Resolved Complaint " + unique;
            const {data} = await axios.post("http://localhost:3001/message", {msg , to , from , markasread, dept });

            if( data?.success ){
                setUnique("");
                localStorage.removeItem("newComplaint");
            }
                
        } 
        catch (error) {
            
        }
    }

    return(
        <>
            
            {/* Navbar for Dashboard */}
            <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            
                            <div className="flex hover:cursor-pointer" onClick={() => window.location.reload()}>
                                <img src={logo} class="h-14 me-3" alt="FlowBite Logo" />
                                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Jadavpur University Complaint Management System</span>
                            </div>
                            
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ms-3">
                                <div className="flex gap-4">
                                    <div className="flex flex-col justify-center">
                                        <p className="text-white font-bold sm:text-2xl">Hello {worker.user} !!</p>
                                    </div>
                                    <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <img class="w-14 h-14 rounded-full text-white" src={account2} alt="user photo"/>
                                    </button>
                                </div>
                                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div class="px-4 py-3" role="none">
                                        <p class="text-sm text-gray-900 dark:text-white" role="none">
                                        Neil Sims
                                        </p>
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                        neil.sims@flowbite.com
                                        </p>
                                    </div>
                                    <ul class="py-1" role="none">
                                        <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* The Side drawer/bar */}
            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 p-4">
                    
                    
                    <ul className="menu bg-base-200 rounded-box w-56 bg-white dark:bg-gray-800">
                        <li>
                            <a href="/workersDashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <p className="font-semibold ms-2 text-xl">Dashboard</p>
                            </a>
                        </li>
                        
                        <li>
                            <a href="/workersform" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <p className="font-semibold ms-2 text-xl">New Complaint</p>
                            </a>
                        </li>
                        
                        <li>
                        <a href="/workershistory" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                        </svg>
                        <p className="font-semibold ms-2 text-xl">History</p>
                        </a>
                        </li>

                    </ul>

                </div>

            </aside>
            
            {/* Complaint Details */}
            <div class="p-4 sm:ml-64 bg-blue-50">
                { (unique) ?  <>
                <div class="p-4 rounded-lg  dark:border-gray-700 mt-14 mb-10">
                    <p className="text-black font-semibold text-2xl m-4">Hello {worker.user} !!</p>
                    <p className="text-black text-5xl font-bold">Newly Assigned Complaint <span className="bg-blue-700 text-2xl text-white p-2 m-3 rounded-xl">New</span></p>
                </div>
                <div className="mt-4 p-4 ml-4 bg-blue-200 text-center rounded-lg">
                    <p className="text-2xl font-bold underline">New Complaint Details</p>
                </div>
                <div className="mt-4 p-4 ml-4 bg-blue-200 text-xl rounded-lg ">
                    <div className="flex gap-4 m-2">
                        <p className="font-semibold bg-gray-200 p-2 rounded-lg">Complaint ID</p> →
                        <span className="font-bold p-2 text-red-500">{unique}</span>
                    </div>
                    <div className="flex gap-4 m-2">
                        <p className="font-semibold bg-gray-200 p-2 rounded-lg">Type of Complaint </p> →
                        <span className="font-bold p-2">{type}</span>
                    </div>
                    <div className="flex gap-4 m-2">
                        <p className="font-semibold bg-gray-200 p-2 rounded-lg">Description of Complaint</p> →
                        <span className="font-bold p-2">{desc}</span>
                    </div>
                    <div className="flex gap-4 m-2">
                        <p className="font-semibold bg-gray-200 p-2 rounded-lg">Address of Complaint</p> →
                        <span className="font-bold p-2">{area} , {district}, {pincode}</span>
                    </div>
                    <div className="flex gap-4 m-2">
                        <p className="font-semibold bg-gray-200 p-2 rounded-lg">Additional Message from Admin</p> →
                        <span className="font-bold p-2">Please do the necessary for resloving the Complaint</span>
                    </div>
                    <div className="flex gap-4 m-2">
                        <p className="font-semibold bg-gray-200 p-2 rounded-lg">Deadline of Complaint</p> →
                        <span className="font-bold p-2" id="time"> {time} </span>
                    </div>
                </div>

                <div className="mt-6 p-4 ml-4 bg-blue-200 rounded-lg">
                    <p className="text-2xl font-semibold"><span className="font-bold underline">Note:-</span> Please keep the Admin Updated regularly about the Progress of complaint resolving process, Incase you find a problem please click the "<span className="text-red-500 underline">Problem Arised</span>" button below to address the same to the Admin, and if Complaint is resolved then Click "<span className="text-blue-700 underline">Resolved Complaint</span>" button .</p>
                </div>

                {/* The modal for Problem */}                            
                <dialog id="my_modal_1" className="modal">
                                
                    <div className="modal-box w-11/12 max-w-5xl">
                        
                        <button className="btn btn-sm btn-circle btn-ghost text-lg text-white absolute right-2 top-2 bg-gray-700" onClick={()=> ( document.getElementById('my_modal_1').close()) }>✕</button>
                        
                        <div className="w-full text-center">
                            <h3 className="font-bold text-4xl text-black bg-red-200 p-2 rounded-xl">Forward Problem to Admin</h3>
                        </div>
                        <div class="md:flex md:items-center mt-10 mb-6 text-black ml-4">
                            <div class="md:w-1/3 bg-gray-200 p-2 mr-2 rounded-xl">
                                <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-2xl" for="inline-full-name">
                                    Complaint ID : 
                                </label>
                            </div>
                            <div class="md:w-3/4">
                                <p className="text-gray-800 text-xl font-bold"> {unique} </p>
                            </div>
                        </div>
                        <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                            <div class="md:w-1/3 bg-gray-200 p-2 mr-2 rounded-xl">
                                <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-2xl" for="inline-full-name">
                                    Address :
                                </label>    
                            </div>
                            <div class="md:w-3/4">
                                <p className="text-gray-800 text-xl font-bold"> {area} , {pincode} , {district} </p>
                            </div>
                        </div>

                        <div class="md:flex md:items-center mt-10 mb-6 text-black ml-4">
                            <div class="md:w-1/3">
                                <label class="text-gray-800 font-bold bg-gray-200 p-2 mb-1 md:mb-0 rounded-xl text-2xl" for="inline-full-name">
                                    Describe the Complaint : 
                                </label>
                            </div>
                            <div class="md:w-3/4">
                                <input type="text" className="border-2 ml-2 border-red-500 px-5 py-2 w-5/6 text-xl rounded-xl" placeholder="Write your text here..." onChange={(event) => setMsg(event.target.value)}/>
                            </div>
                        </div>

                        <div className="w-full">
                            <form method="dialog">
                                <div className="flex justify-center gap-8">
                                    <button className="btn text-white text-lg mt-6 text-xl bg-red-600" onClick={() => sendAdmin(msg)}> Forward Admin </button>
                                </div>
                            </form>
                        </div>         
                    </div>

                </dialog>
            
                {/* The modal for Successful Resolve  */}
                <dialog id="my_modal_2" className="modal">
                                
                    <div className="modal-box w-11/12 max-w-5xl">
                        
                        <button className="btn btn-sm btn-circle btn-ghost text-lg text-white absolute right-2 top-2 bg-gray-700" onClick={()=> ( document.getElementById('my_modal_2').close()) }>✕</button>
                        
                        <div className="w-full flex justify-center">
                            <BsExclamationTriangle className="text-9xl text-yellow-600"/>
                        </div>
                        <div class="w-full mt-6 text-center">
                            <div className="w-full flex flex-col">
                                <p className="font-bold text-3xl">Successfully Resolved Complaint ?</p>
                                <p className="font-semibold text-xl mt-4">If you have Successfully Resolved the assigned complaint then Click "<span className="text-green-600">Confirm</span>". </p>
                            </div>
                        </div>
                        
                        <div className="w-full">
                            <form method="dialog">
                                <div className="flex justify-center gap-8">
                                    <button className="btn text-white text-lg mt-6 text-xl bg-green-600" onClick={forwardResolved}> Confirm </button>
                                </div>
                            </form>
                        </div>         
                    </div>
                    
                </dialog>
            

                <div className="mt-6 flex justify-center">
                    <div className="flex gap-6">
                    <button className="btn bg-red-500 text-2xl text-white" onClick={()=> (document.getElementById('my_modal_1').showModal())}>Problem Arised</button>
                    <button className="btn bg-blue-700 text-2xl text-white" onClick={()=> (document.getElementById('my_modal_2').showModal())}>Resolved Complaint</button>
                    </div>
                </div>
                </>
                : 
                <>
                    <div class="p-4 rounded-lg  dark:border-gray-700 mt-14 mb-10">
                        <p className="text-black font-semibold text-2xl m-4">Hello {worker.user} !!</p>
                        <p className="text-black text-5xl font-bold">No New Complaint is Assigned to you till Now !!</p>
                    </div>
                </>
                }
            </div>

            
        </>

    );
}

export default WorkersForm;