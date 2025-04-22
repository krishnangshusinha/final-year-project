/*

    npm init            --> to initialize package.json
    npm i express       --> to instal express
    npm i nodemon       --> installs nodemon (this library automatically restarts the nodejs application is any new change is saved. only change the "start" attribute of "script" object to "nodemon index.js" at package.json)
    npm i mongoose      --> used for connecting backend with database
    npm i cors          --> used to prevent Cross Origin errors when the frontend and backedn connects with each other

    twilio code --> PWTSUEU188DRRZD2EZ5D21FT

*/

const express = require("express");
const app = express();

const electricityRoutes = require("./routes/electricityRoutes");
const trackingRoutes = require("./routes/trackingRoutes");
const adminRoutes = require("./routes/adminRoutes");
const workersRoutes = require("./routes/workersRoutes");
const messageRoutes = require("./routes/messageRoutes");
const waterRoutes = require("./routes/waterRoutes");
const roadRoutes = require("./routes/roadRoutes");
const drainageRoutes = require("./routes/drainageRoutes");
const garbageRoutes = require("./routes/garbageRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const cors = require("cors");

// database connecting
require("./connect");

app.use(cors());            // for dealing with Cross-origin Resource sharing. (CORS is esentital since it used to check which data can be shared between two website and which cannot)
app.use(express.json());    // is a middleware function that is used to parse JSON data sent in the request body.


app.use("/electricity" , electricityRoutes);
app.use("/water", waterRoutes);
app.use("/road", roadRoutes);
app.use("/drainage", drainageRoutes);
app.use("/garbage", garbageRoutes);
app.use("/track" , trackingRoutes);
app.use("/admin" , adminRoutes);
app.use("/workers", workersRoutes);
app.use("/message" , messageRoutes);
app.use("/feedback" , feedbackRoutes);

app.get('/', (req,res)=>{
    console.log("Hi");
} )



const port = process.env.PORT || 3001;
app.listen((port) , ()=> {
    console.log(`Server listening at port ${port}`)    // makes our this console state having background color as cyan and text as white 
})