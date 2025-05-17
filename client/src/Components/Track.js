import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


const Track = () => {
    const[complaintID , setComplaintID] = useState("");
    const[status , setStatus] = useState();
    const[userID , setUserID] = useState();
    const[area, setArea] = useState();
    const[pincode, setPincode] = useState();
    const[district , setDistrict] = useState();
    
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

    // onclicking the "check" button 
    const check = async () => {
        try{
            if( complaintID === "" ){
                alert("Enter Complaint Number to check status");
            }
            else{
                const {data} = await axios.get(`https://final-year-project-9p1g.onrender.com/track/${complaintID}`);
                
                if(data?.success){
                    console.log(data?.unqiue);
                    console.log(data?.message);
                    console.log(data?.complaint);
                    setStatus(data?.complaint.status);
                    setUserID(data?.complaint.user_id);
                    setArea(data?.complaint.area);
                    setPincode(data?.complaint.pincode);
                    setDistrict(data?.complaint.district);
                    
                    document.getElementById('my_modal_1').showModal();
                }
                
            }
        }
        catch(error){
            console.log(error);
            alert("Invalid Complaint Number");
        }
    }

    return(
        <>
            <div className="h-screen w-full bg-gradient-to-tl from-red-400 to-gray-300 p-8">
                <Link to="/"><div><MdHome className="text-3xl border-2 border-blue-950 rounded-xl"/></div></Link>
                <div className="text-4xl font-bold  w-full text-center p-4 text-gray-900">Jadavpur University Complaint Management System </div>
                <div className="text-2xl font-bold w-full text-center p-2 bg-white rounded-xl">Track your complaint</div>
                <div className="bg-white rounded-xl mt-4 flex flex-col gap-4 p-4">
                    <div className="w-full text-center text-2xl font-semibold underline mb-4">Complaint Tracking Form</div>
                    <div className="text-red-500 mt-2 w-full text-center">Instructions : Fields marked with red (*) are compulsory.</div>
                    
                    {/* Enter Complaint Number */}
                    <div>
                        <div className="bg-slate-300 w-full text-center rounded-xl p-1 font-medium">Complaint Details</div>
                        
                        
                        <div className="flex gap-20 mt-4">
                            <p className="text-1xl font-semibold ml-20 mt-4">Enter Complaint Number :- <span className="text-red-500"> * </span></p>
                            <div class="w-1/2">
                            <input class="w-full max-w-xlg bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-teal-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500  shadow-sm focus:shadow ml-20 mt-2" onChange={(event) => setComplaintID(event.target.value) } placeholder="Enter Complaint Number here..."/>
                            </div>
                        </div>
                    </div>

                    
                    <div className="w-full text-center">
                        
                        <button className="btn bg-blue-500 hover:bg-blue-700 text-white text-lg mt-4 font-bold py-2 px-4 border border-blue-700 " onClick={()=> ( check() )}>Check</button>
                        
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-4xl mb-6 p-4">Your Complaint Status</h3>
                                
                                {/* Form in Modal */}
                                <div className="overflow-x-auto">
                                    <table className="table border-separate border border-slate-500">
                                        {/* head */}
                                        <thead className="text-lg text-gray-600">
                                        <tr>
                                            <th class="border border-slate-600">Sl. No.</th>
                                            <th class="border border-slate-600">Complaint ID</th>
                                            <th class="border border-slate-600">Adhar Number</th>
                                            <th class="border border-slate-600">Address</th>
                                            <th class="border border-slate-600">Status</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-gray-800 text-medium">
                                        {/* row 1 */}
                                        <tr className="bg-base-200">
                                            <th class="border border-slate-600">1</th>
                                            <td class="border border-slate-600">{complaintID}</td>
                                            <td class="border border-slate-600">{userID}</td>
                                            <td class="border border-slate-600">{area} , {district} - {pincode}</td>
                                            <td class="border border-slate-600"> <span className="font-bold text-red-500 text-lg">{status}</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="modal-action flex justify-between">
                                    {
                                        (status == "Resolved") ? <>
                                            <button className="btn btn-link font-bold text-xl" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                                                Submit Feedback
                                            </button>
                                        </>
                                        : null
                                    }
                                    
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                                
                                {/* Modal for Feedback submission */}
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

                        </dialog>

                                                    

                                                    


                    </div>

                    

                </div>
            </div>
        </>
    );
}

export default Track;