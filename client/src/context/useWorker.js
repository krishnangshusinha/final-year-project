import {useState , useContext , createContext, useEffect } from 'react';
import axios from 'axios';

const WorkerContext = createContext();    // context created

const WorkerProvider = ({children}) => {

    const [worker,setWorker] = useState({       // the global variable
        user: null,
        phone:"",
        complaints:[],
    });

    
    useEffect(()=>{     // each time the component is rendered we retrive the data stored in "auth" and parse it and update its value
        
        const data = localStorage.getItem("worker");      // getting data stored in localstorage
        if( data ){
            const parseData = JSON.parse(data);

            setWorker({
                ...worker,
                user: parseData.username,
                phone: parseData.phone,
                complaints: parseData.complaints,
            });
        }

        //eslint-disable-next-line       
        //--> this line is for disabling the warning for empty dependency of useEffect() 

    }, []);     

    return (
        <WorkerContext.Provider value={[worker , setWorker]}>         
            {children}
        </WorkerContext.Provider>
    );
};

// custom hook
const useWorker = () => useContext(WorkerContext);

export {useWorker , WorkerProvider};