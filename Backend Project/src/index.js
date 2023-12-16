//require ('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"; 


dotenv.config({
    path: './env'
})

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000,() =>{
        console.log(`service is running on port : 
        ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO DB Connection failed ", err);
})










/*
( async() =>{
    try {
       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",()=>{
        console.log("ERRR: ",error);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening in port ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("ERROR .",error)
        throw err
    }
})()*/ 