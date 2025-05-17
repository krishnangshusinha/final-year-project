import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import { FcFeedback } from "react-icons/fc";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";


const FeedbackAll = () => {

    const [feedbacks , setFeedbacks] = useState();

    useEffect(() => {
    
            const fetchFeedbacks = async (department) => {
        
                try {
                    
                    const {data} = await axios.get(`https://final-year-project-9p1g.onrender.com/feedback/${department}`);
                    
                    if( data?.success ){
                        setFeedbacks(data?.element);
                    }
        
                } 
                catch (error) {
                    alert("error in fetching feedback")
                }
        
            }
    
            const department = localStorage.getItem("department");
            if( department ){
                fetchFeedbacks(department);
            }
        
    }, [])
        

    return (
        <>
            <AdminLayout/>
            <h1> All Feedbacks </h1>
            <div class="p-4 sm:ml-64 bg-blue-50">
                <div class="p-4 rounded-lg  dark:border-gray-700 mt-14">
                    <div className="pr-4 pt-4 pb-4 flex flex-row gap-6 font-bold mb-6">
                        <p className="text-5xl">User Feedbacks</p>
                        <FcFeedback className="text-4xl mt-1"/>
                    </div>
                    <div className="flex flex-col gap-6">
                    {
                        feedbacks?.map((n) => (
                            <>
                                <div className="card card-border bg-base-100 w-full border border-gray-400">
                                    <div className="card-body">
                                        <div className="flex gap-4">
                                            <MdOutlineAccountCircle className="text-5xl mt-1"/>
                                            <h2 className="card-title text-5xl font-bold">{n?.name}</h2>
                                        </div>
                                        <h2 className="text-2xl p-2 pl-12 font-semibold"> Complaint ID → <span className="font-bold"> {n?.cid} </span> </h2>
                                        <h2 className="text-2xl p-2 pl-12 font-bold"> <span className="underline"> Feedback</span> →  {n?.feedback}  </h2>
                                    </div>
                                </div>
                            </>
                        ))
                        
                    }
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedbackAll;