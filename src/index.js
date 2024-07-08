import app from "./app.js";
import dbConnection from "./db/connection.js";
import dotenv from "dotenv";

const env = process.env.NODE_ENV || 'development';
const envFilePath = path.resolve(__dirname, `.env.${env}`);
dotenv.config({path: envFilePath})

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

