/*
    Username --> krishnangshusinha15
    Password --> njVGTIKu2310d0QW

    mongodb+srv://krishnangshusinha15:njVGTIKu2310d0QW@cluster0.doqsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://krishnangshusinha15:njVGTIKu2310d0QW@cluster0.doqsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("MongoDB connected successfully"))
.catch((error) => console.log("Error in connecting database..." , error))