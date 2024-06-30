import mongoose from "mongoose";    

const userSchema = new mongoose.Schema(
    {
        
        email : {type : String, required : true, unique : true, lowercase : true},
        password : {type : String, required : true, unique : true, lowercase : true},
        name : {type : String, required : true},
        phone : { type : String, required : true, unique : true}
    },
    {
        timestamps : true
    })


export const User = mongoose.model("User", userSchema) 