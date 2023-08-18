import { NextResponse } from 'next/server';
import User from '../../../../models/User';
import connect from "../../../../utils/db";


export const POST =async (request) =>{
    const {name,email,password}=await request.json();

    await connect();
    
    const newUser=new User({
        name,
        email,
        password
    });

    try {
        await newUser.save();
        return new NextResponse("acoount has been created",{
            status:200,
        });
        
    } catch (error) {
        return new NextResponse(error.message,{
            status:500,
        });
        
    }
}