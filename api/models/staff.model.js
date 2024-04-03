import mongoose from "mongoose";

const staffSchema = new mongoose.Schema( {
    name:{
        type: String,
        required: true,
        
    },

    number:{
        type: String,
        required: true,
        
    },

    id:{
        type: String,
        required: true,
        unique:true,
        
    },

    email:{
        type: String,
        required: true,
        
    },

    address:{
        type: String,
        required: true,
        
    },

    joindate:{
        type: String,
        required: true,
        
    },

    shift:{
        type: String,
        required: true,
        
    },

    license:{
        type: String,
        required: true,
        
    },

    username:{
        type: String,
        required: true,
        unique:true,
        
    },

    password:{
        type: String,
        required: true,
        unique:true,
        
    },
}, {timestamps:true} );

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;