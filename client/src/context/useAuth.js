import {useState , useContext , createContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();    // context created

const AuthProvider = ({children}) => {

    const [auth,setAuth] = useState({       // the global variable
        user: null,
        department:"",
    });

    
    useEffect(()=>{     // each time the component is rendered we retrive the data stored in "auth" and parse it and update its value
        
        const data = localStorage.getItem("auth");      // getting data stored in localstorage
        if( data ){
            const parseData = JSON.parse(data);

            setAuth({
                ...auth,
                user: parseData.username,
                department: parseData.department,
            });
        }

        //eslint-disable-next-line       
        //--> this line is for disabling the warning for empty dependency of useEffect() 

    }, []);     

    return (
        <AuthContext.Provider value={[auth , setAuth]}>         
            {children}
        </AuthContext.Provider>
    );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export {useAuth , AuthProvider};