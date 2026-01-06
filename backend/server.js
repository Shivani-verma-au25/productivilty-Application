import {app} from './src/app.js'
import dotenv from 'dotenv'
dotenv.config({ 
    path:'.env'
})

import { dbConnection } from './src/db/databseConnection.js';
const port = process.env.PORT || 8000;

dbConnection().then(()=>(
    app.listen(port , () => (
    console.log(`Server is running on ${port}`)
    ))
)).catch((error) =>(
    console.log("❌ Error while starting the server", error)
))




