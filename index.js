import express from 'express';
const app = express()
import {PORT} from "./src/config/config.js";
import router from "./src/routes/api.js"



app.use(express.json())
app.use("/", router);



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})