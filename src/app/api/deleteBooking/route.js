import { NextResponse } from 'next/server.js';
import dbConnect from '../../lib/connectDB.js';
import Booking from '../../models/Booking.js';

export async function POST(req, res) {
    try {
        dbConnect();
        const bookingId = req.params.id;

        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return NextResponse.json({
                success: false,
                message: 'error whilie deleting',
            },
                {
                    status: 500
                })
        }


        // deleting booking
        await Booking.findByIdAndDelete(bookingId);

        return NextResponse.json({
            success: true,
            message: 'booking deleted',
        },
            {
                status: 200
            })
    }
    catch (error) {
        console.log(error);

    }
};