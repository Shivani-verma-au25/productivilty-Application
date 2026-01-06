import mongoose, {Schema} from 'mongoose';

const taskSchema = new Schema({
    taskTitle :{
        type:String,
        required:true,
        trim:true
    },
    taskDetails:{
        type:String,
        trim:true,
        required : false
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
} ,{timestamps:true});

export const Task = mongoose.model('Task',taskSchema);