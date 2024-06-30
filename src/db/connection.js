import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const dbConnection = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}}`)
        console.log(`Mongodb connected to host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`Mongodb connection error: ${error}`)
        process.exit(1)
    }
}

export default dbConnection