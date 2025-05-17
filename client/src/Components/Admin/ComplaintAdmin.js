import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import axios from "axios";
import { SiTicktick } from "react-icons/si";
import { FaSearch } from "react-icons/fa";


const ComplaintAdmin = () => {
    const[unqiueID , setUnqiueID] = useState([]);
    
    const models = new Map([
        ["installModel", "Electricity Install Request"],
        ["repairModel", "Electricity Repair Request"],
        ["winstallModel", "Water Install Request"],
        ["wrepairModel", "Water Repair Request"],
        ["rinstallModel", "Road Install Request"],
        ["rrepairModel", "Road Repair Request"],
        ["dinstallModel", "Drainage Install Request"],
        ["drepairModel", "Drainage Repair Request"],
        ["ginstallModel", "Garbage Install Request"],
        ["grepairModel", "Garbage Repair Request"],
      ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const [time, setTime] = useState();
    const [modelType, setModelType] = useState();
    const [complaintID , setComplaintID] = useState();

    const [model , setModel] = useState();

    const [search, setSearch] = useState("");

    useEffect(() => {

        // first fetching all the unique IDs
        const fetchUniqueIDs = async (admin) => {
            
            try{
                const {data} = await axios.get(`https://final-year-project-9p1g.onrender.com/admin/all/${admin}`);
                
                if(data?.success){
                    setUnqiueID(data?.complaints);
                }
            }
            catch(error){
                console.log(error);
                alert("Error in getting all Complaints");
            }

        }
        
        const admin = localStorage.getItem("admin");
        fetchUniqueIDs(admin);
    }, [])


    let indexOfFirstItem = (currentPage-1)*10;
    let indexOfLastItem = indexOfFirstItem + 10;
    
    // list of items for current page
    let currentItems = unqiueID.slice(indexOfFirstItem, indexOfLastItem);
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // handles status update for a complaint
    const handleStatus = async (id , model) => {
        try {
            
            const {data} = await axios.put(`https://final-year-project-9p1g.onrender.com/admin/${model}/${id}`)

            if( data?.success ){
                window.location.reload();
            }
        }
        catch (error) {
            
        }
    }

    
    return (

        <>
            <AdminLayout/>
            <div class="p-4 sm:ml-64 bg-blue-50">
                <div class="p-4 rounded-lg  dark:border-gray-700 mt-14">

                    <div className="pr-4 pt-4 pb-4 flex flex-col gap-2 font-bold mb-6">
                        <p className="text-4xl">All Complaints</p>
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
                            <label htmlFor="table-search" className="sr-only">Search</label>
                            <div className="relative flex gap-4">
                                <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Complaints" onChange={(event) => ( setSearch(event.target.value) )} />
                                <button className="btn dark:bg-gray-700 text-white text-xl" >Search <FaSearch className="text-xl mt-1"/></button>
                            </div>
                        </div>

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                Complaint ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Complaint Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Date of Complaint
                                </th>
                                
                                <th scope="col" className="px-6 py-3">
                                Status
                                </th>
                            </tr>
                            </thead>
                            <tbody>

                            {/* The modal */}                            
                            <dialog id="my_modal_1" className="modal">
                
                                <div className="modal-box">
                                    
                                    <button className="btn btn-sm btn-circle btn-ghost text-lg text-black absolute right-2 top-2" onClick={()=> ( document.getElementById('my_modal_1').close()) }>✕</button>
                                    
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
                                                Complaint ID:- 
                                            </label>    
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {complaintID} </p>
                                        </div>
                                    </div>
                                    
                                    <div class="md:flex md:items-center mt-6 mb-6 text-black ml-4">
                                        <div class="md:w-1/3">
                                            <label class="text-gray-800 font-bold mb-1 md:mb-0 pr-4 text-xl" for="inline-full-name">
                                                Model Type:- 
                                            </label>    
                                        </div>
                                        <div class="md:w-3/4">
                                            <p className="text-gray-800 text-xl font-bold"> {modelType} </p>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="w-full">
                                        <form method="dialog">
                                            <div className="flex justify-center gap-8">
                                                <button className="btn text-white text-lg bg-red-400 mt-6" >Close</button>
                                                <button className="btn text-white text-lg bg-green-500 mt-6" onClick={() => handleStatus(complaintID , model)} >Resolved</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </dialog>
                            

                            {unqiueID?.map((c) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" onClick={() => (setComplaintID(c._id) , setModel(c.local_model), setModelType(models.get(c.local_model)) , setTime(c.createdAt.substring(0, 10)))}>
                                    {
                                        (search === "") ?
                                        <>
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {c._id}
                                            </td>
                                            <td className="px-6 py-4">
                                            {models.get(c.local_model)}
                                            </td>
                                            <td className="px-6 py-4">
                                            {c.createdAt.substring(0, 10)}
                                            </td>
                                            <td className="px-6 py-4 flex gap-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-4" onClick={()=> (document.getElementById('my_modal_1').showModal())}>View Request</a>
                                                <button className="btn text-white flex bg-green-600 p-1" onClick={() => handleStatus(c._id , c.local_model)}>Resolved <SiTicktick className="text-white"/></button>
                                            </td>
                                        </> 
                                    :
                                        <>
                                        {
                                            (search === c._id) ?
                                            <>
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {c._id}
                                            </td>
                                            <td className="px-6 py-4">
                                            {models.get(c.local_model)}
                                            </td>
                                            <td className="px-6 py-4">
                                            {c.createdAt.substring(0, 10)}
                                            </td>
                                            <td className="px-6 py-4 flex gap-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-4" onClick={()=> (document.getElementById('my_modal_1').showModal())}>View Request</a>
                                                <button className="btn text-white flex bg-green-600 p-1" onClick={() => handleStatus(c._id , c.local_model)}>Resolved <SiTicktick className="text-white"/></button>
                                            </td>
                                            </>
                                            : null

                                        }
                                        </>
                                    }
                                </tr> 
                            ))}
                            
                            </tbody>
                        </table>

                        
                        {/* pagination 
                        <div className="flex justify-center my-8">
                        {
                            Array.from({ length: Math.ceil(unqiueID.length / itemsPerPage),}).map((_ , index) => (
                            
                            <button key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`mx-2 px-2 py-1 rounded-full font-medium ${ currentPage === index + 1 ? "text-white dark:bg-blue-900" : "bg-gray-200 text-blue" }`}                
                            >
                                {index + 1}
                            </button>
                            
                            ))
                        }
                        </div>
                         */}

                    </div>

                </div>
            </div>
            
        </>
    
    );
}


export default ComplaintAdmin;
