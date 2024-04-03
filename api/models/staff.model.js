import mongoose from "mongoose";

const staffSchema = new mongoose.Schema( {
    name:{
        type: String,
        required: true,
        
    },

    id:{
        type: String,
        required: true,
        unique:true,
        
    },

    type:{
        type: String,
        required: true,
    },

    number:{
        type: String,
        required: true, 
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
        
        
    },

    username:{
        type: String,
        
        unique:true,
        
    },

    password:{
        type: String,
        
        unique:true,
        
    },
}, {timestamps:true} );

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;