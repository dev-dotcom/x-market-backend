import dbConnection from "./db/connection.js";
import dotenv from "dotenv";

dotenv.config({
  path :'./env'
})

dbConnection()