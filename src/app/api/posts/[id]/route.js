import { NextResponse } from 'next/server';
import Postes from '../../../../models/Postes';
import connect from '../../../../utils/db';

export const GET = async (request,{params}) => {
    const {id}=params
    try {
        await connect();

        const post = await Postes.findById(id);
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
        console.error('Database error:', error);
        return new NextResponse(`database error ${error}`, { status: 500 });
    }
};
