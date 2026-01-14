import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config({
    path:'.env'
});
const app = express()



app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true    
}))

import taskRouter from './routers/task.router.js';
app.use('/api/v1/tasks',taskRouter)

export {app}