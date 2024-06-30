import app from "./app.js";
import dbConnection from "./db/connection.js";
import dotenv from "dotenv";

dotenv.config({
  path :'./env'
})

dbConnection()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
  })
})
