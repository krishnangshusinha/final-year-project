import React from "react";
import Home from "../Components/Home";
import ComplaintForm from "../Components/ComplaintForm";
import {createBrowserRouter} from "react-router-dom";
import Track from "../Components/Track";
import About from "../Components/About";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";
import Login from "../Components/Login";
import DashboardAdmin from "../Components/Admin/DashboardAdmin";
import ComplaintAdmin from "../Components/Admin/ComplaintAdmin";
import ElectricityInstallPage from "../Components/Admin/Request Pages/ElectricityInstallPage";
import ElectricityRepairPage from "../Components/Admin/Request Pages/ElectricityRepairPage";
import WorkersForm from "../Components/WorkersForm";
import WorkersLogin from "../Components/WorkersLogin";
import WorkersHistory from "../Components/WorkersHistory";
import WorkersDashboard from "../Components/WorkersDashboard";
import NotificationAdmin from "../Components/Admin/NotificationsAdmin";
import WaterInstallPage from "../Components/Admin/Request Pages/WaterInstallPage";
import WaterRepairPage from "../Components/Admin/Request Pages/WaterRepairPage";
import RoadInstallPage from "../Components/Admin/Request Pages/RoadInstallPage";
import RoadRepairPage from "../Components/Admin/Request Pages/RoadRepairPage";
import DrainageInstallPage from "../Components/Admin/Request Pages/DrainageInstallPage";
import DrainageRepairPage from "../Components/Admin/Request Pages/DrainageRepairPage";
import GarbageInstallPage from "../Components/Admin/Request Pages/GarbageInstallPage";
import GarbageRepairPage from "../Components/Admin/Request Pages/GarbageRepairPage";
import FeedbackAll from "../Components/Admin/FeedbackAll";

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/form",
        element:<ComplaintForm/>
    },
    {
        path:"/track",
        element:<Track/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/faq",
        element:<FAQ/>
    },
    {
        path:"/admin/dashboard",
        element:<DashboardAdmin/>
    },
    {
        path:"/admin/complaints",
        element:<ComplaintAdmin/>
    },
    {
        path:"/admin/notifications",
        element:<NotificationAdmin/>,
    },
    {
        path:"/admin/feedbacks",
        element:<FeedbackAll/>
    },
    {
        path:"/admin/eletricityInstall",
        element:<ElectricityInstallPage/>
    },
    {
        path:"/admin/eletricityRepair",
        element: <ElectricityRepairPage/>
    },
    {
        path:"/admin/waterInstall",
        element: <WaterInstallPage/>
    },
    {
        path:"/admin/waterRepair",
        element: <WaterRepairPage/>
    },
    {
        path:"/admin/roadInstall",
        element: <RoadInstallPage/>
    },
    {
        path:"/admin/roadRepair",
        element: <RoadRepairPage/>
    },
    {
        path:"/admin/drainageInstall",
        element: <DrainageInstallPage/>
    },
    {
        path:"/admin/drainageRepair",
        element: <DrainageRepairPage/>
    },
    {
        path:"/admin/garbageInstall",
        element: <GarbageInstallPage/>
    },
    {
        path:"/admin/garbageRepair",
        element: <GarbageRepairPage/>
    },
    {
        path:"/workersDashboard",
        element: <WorkersDashboard/>
    },
    {
        path:"/workersform",
        element: <WorkersForm/>
    },
    {
        path:"/workersLogin",
        element: <WorkersLogin/>
    },
    {
        path:"workershistory",
        element: <WorkersHistory/>
    }
    
])

export default Router;