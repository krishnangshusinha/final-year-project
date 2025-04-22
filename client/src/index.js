import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from "./Router/Router";
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/useAuth';
import { WorkerProvider } from './context/useWorker';


/*

    Tailwind CSS installation --> https://tailwindcss.com/docs/installation

    Daisyui installation --> https://daisyui.com/resources/videos/how-to-install-and-use-daisy-ui-in-react-js-app-sfyuwhh2svg/
   
    npm i react-router-dom  --> for routing facilities

    npm i react-icons --> for using react icons

    npm i axios  --> Axios is a JavaScript library that allows developers to make HTTP requests from a web browser or Node.js
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WorkerProvider>
        <AuthProvider>
            <RouterProvider router={Router} />
        </AuthProvider>
    </WorkerProvider>
);