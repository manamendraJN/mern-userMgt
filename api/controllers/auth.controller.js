import Staff from "../models/staff.model.js";
import bcryptjs from 'bcryptjs';

export const register = async(req,res)=>{
    const {name,id,type,number,email,address,joindate,shift,license,username,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newStaff = new Staff({name,id,type,number,email,address,joindate,shift,license,username,password:hashedPassword});

    try {

        await newStaff.save()
        res.status(201).json({message:"Staff member created successfully"});
    } catch (error) {
        res.status(500).json(error.message);
    }
};