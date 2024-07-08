import app from "./app.js";
import dbConnection from "./db/connection.js";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url); //        \x-market-backend\src\server.js
const __dirname = dirname(__filename);//                     \x-market-backend\src
const env = process.env.NODE_ENV || 'development';         
const envFilePath = path.resolve(__dirname, `../.env.${env}`); //      \.env.development
dotenv.config({ path: envFilePath });


dbConnection()
.then((response) => {
  console.log(`Mongodb is connected to host ${response.connection.host}`);
  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
  })
})
.catch((error) => {     
  console.log(`Error encountered: ${error}`)
})

