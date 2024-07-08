import app from "./app.js";
import dbConnection from "./db/connection.js";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const env = process.env.NODE_ENV || 'development';
const envFilePath = path.resolve(__dirname, `.env.${env}`);
dotenv.config({ path: envFilePath });

console.log(process.env.NODE_ENV);


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

