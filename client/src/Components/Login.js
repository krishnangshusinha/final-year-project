import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import axios from 'axios'
import { useAuth } from "../context/useAuth";

const Login = () => {
    const[username , setUsername] = useState();
    const[password , setPassword] = useState();
    const[department , setDepartment] = useState();

    // Context API
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    // logging in the Admin
    const submit = async () => {
        try{
            const {data} = await axios.post("http://localhost:3001/admin", {username,password,department});      // gets the response sent in this URL by the server

            if( data?.success ){
                console.log("Successfull");
                
                setAuth({
                    ...auth,
                    user: username,
                    department: department,
                });

                localStorage.setItem("auth", JSON.stringify(data));
                localStorage.setItem("admin" , username);
                localStorage.setItem("department" , department);

                navigate("/admin/dashboard", {replace:true});
            }
        }
        catch(error){
            console.log(error);
            alert("Wrong Details");
        }
    }

    return (
        <>
            <div className="h-full w-full bg-gradient-to-tl from-red-400 to-gray-300 p-8">
                
                <Link to="/"><div><MdHome className="text-3xl border-2 border-blue-950 rounded-xl"/></div></Link>
                
                <div className="w-full flex justify-center">
                    <img src={logo} class="object-scale-down h-28 w-86" alt="logo"/>
                </div>
                
                <div className="text-4xl font-bold  w-full text-center p-4 text-gray-900">Jadavpur University Complaint Management System</div>
                
                <div className="flex justify-center">
                    <div className="text-2xl font-bold w-1/3 text-center p-2 bg-white rounded-xl">Departmental Login</div>
                </div>

                <div className="rounded-xl flex flex-col gap-4 p-4">
                    
                    <div class="w-full flex justify-center">

                        <form class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-1/3" >
                            <div class="mb-4">
                                <label class="block text-gray-700 text-md font-bold mb-2" for="username">
                                   Your Username
                                </label>
                                <input class="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Your Username here...." onChange={(event)=> setUsername(event.target.value)} />
                            </div>
                            <div class="mb-2">
                                <label class="block text-gray-700 text-md font-bold mb-2" for="password">
                                   Your Password
                                </label>
                                <input class="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your pasword here...." onChange={(event)=> setPassword(event.target.value)} />
                            </div>
                            <div className="mb-6">
                                <label class="block text-gray-700 text-md font-bold" for="department">
                                   Your Department
                                </label>
                                <div className="w-full">
                                    <select className="select select-success w-full cover-full max-w-xlg mt-2" onChange={(event) => setDepartment(event.target.value)} defaultValue="A" required>
                                        <option value="A">Select your Department</option>
                                        <option value="electricity">Electricity Department</option>
                                        <option value="water">Water Department</option>
                                        <option value="road">Road Department</option>
                                        <option value="garbage">Garbage Department</option>
                                        <option value="drainage">Drainage Department</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="flex items-center justify-center">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submit}>
                                    Login
                                </button>
                            </div>
                        </form>
                        
                    </div>

    
                </div>

            </div>
        </>
    );
}

export default Login;