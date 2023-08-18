import { NextResponse } from 'next/server';
import Postes from '../../../models/Postes';
import connect from '../../../utils/db';

export const GET = async (request) => {
    try {
        await connect();

        const posts = await Postes.find();
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error('Database error:', error);
        return new NextResponse(`database error ${error}`, { status: 500 });
    }
};
