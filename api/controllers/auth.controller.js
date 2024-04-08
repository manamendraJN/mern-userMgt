import Staff from "../models/staff.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utills/error.js";
import Jwt from "jsonwebtoken";

export const register = async(req,res,next)=>{
    const {name,id,type,number,email,address,joindate,shift,license,username,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newStaff = new Staff({name,id,type,number,email,address,joindate,shift,license,username,password:hashedPassword});

    try {

        await newStaff.save()
        res.status(201).json({message:"Staff member created successfully"});
    } catch (error) {
        next(error);
    }
};

export const login = async(req,res,next)=>{
    const {username,password} = req.body;

    try {
        const validUser = await Staff.findOne({username});
        if (!validUser) return next(errorHandler(404, 'User not found'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong username or password'));
        const token = Jwt.sign({id : validUser._id}, process.env.Jwt_SECRET);
        const {password: hashedPassword, ...rest}= validUser._doc;
        const expiryDate = new Date(Date.now()+3600000);
        res.cookie('access_token', token, {httpOnly:true,expires:expiryDate}).status(200).json(rest);
    } catch (error) {
       next(error) ;
    }
};
