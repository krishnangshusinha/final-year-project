import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/useAuth";
import AdminLayout from "./AdminLayout";
import { FaBell } from "react-icons/fa";


const NotificationAdmin = () => {

    const [auth, setAuth] = useAuth();

    const [notifications , setNotifications] = useState([]);

    
    useEffect(() => {

        const fetchNotifications = async (admin) => {
    
            try {
                
                const {data} = await axios.get(`https://final-year-project-9p1g.onrender.com/message/${admin}`);
                
                if( data?.success ){
                    setNotifications(data?.element);
                }
    
            } 
            catch (error) {
                
            }
    
        }

        const admin = localStorage.getItem("admin");
        if( admin ){
            fetchNotifications(admin);
        }
    
    }, [])
    
    const markasread = async (id , msg , from) => {
        try {
            const {data} = await axios.put(`https://final-year-project-9p1g.onrender.com/message/${id}`)
            
            if( data?.success ){
                console.log(data?.message);

                const arr = notifications;
                arr.filter((a) => {
                    return a._id != id;
                })

                setNotifications(arr);
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
                    <div className="pr-4 pt-4 pb-4 flex flex-row gap-6 font-bold mb-6">
                        <p className="text-4xl">Your All Unread Notifications</p>
                        <FaBell className="text-4xl mt-1"/>
                    </div>
                    {
                        notifications.map((n) => (
                            <>
                                <div className="w-full flex p-4">
                                    <div className="card bg-base-100 w-5/6 shadow-xl mb-6 border-2 border-indigo-600 hover:scale-105 transition duration-300 hover:bg-gray-200">
                                        <div className="card-body">
                                            <h2 className="card-title text-3xl "> <span className="p-2 rounded-xl"> From :- <span className="font-bold bg-gray-200 p-1 rounded-lg">{n.from}</span> </span></h2>
                                            <p className="text-xl p-4 mt-4 bg-gray-200 rounded-lg"><span className="underline">Message</span> :- <span className="ml-4 font-bold"> {n.message} </span></p>
                                            <div className="card-actions flex w-full justify-end">
                                                <p className="text-xl p-4 mt-4 font-bold"> <span className="underline">Date</span> :- <span className="bg-gray-200 p-1 rounded-lg"> {n.createdAt.substring(0,10)} </span></p>
                                                <button className="text-blue-700 font-bold text-2xl mt-8" onClick={() => markasread(n._id , n.message , n.from)}>Mark as Read</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default NotificationAdmin;